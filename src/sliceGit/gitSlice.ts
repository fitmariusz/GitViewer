import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RepoList, UserDetails, UsersFetch } from "../app/userTypes";
import { repoList } from "../bases/repoList";
import { user } from "../bases/user";

interface UsersInfo {
  users: UsersFetch[];
  userDetails: UserDetails | null;
  userRepos: RepoList[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UsersInfo = {
  users: [],
  userDetails: null,
  userRepos: [],
  isLoading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<UsersFetch[]>(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<UsersFetch[]>(
        "https://api.github.com/users"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: "Error fetching GitHub users" });
    }
  }
);

export const fetchUserDetails = createAsyncThunk<UserDetails, string>(
  "user/fetchUserDetails",
  async (login, thunkAPI) => {
    try {
      const response = await axios.get<UserDetails>(
        `https://api.github.com/users/${login}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: "Error fetching details user" });
    }
  }
);

export const fetchUserRepos = createAsyncThunk<RepoList[], string>(
  'user/fetchUserRepos',
  async (login, thunkAPI) => {
    try{
      const response = await axios.get<RepoList[]>(`https://api.github.com/users/${login}/repos`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({error: "Error fetching user repositories"});
    }
  }
);

const gitSlice = createSlice({
  name: "git",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Error :(";
    });
    builder.addCase(fetchUserDetails.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDetails = action.payload;
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Error :(";
    }
    );
    builder.addCase(fetchUserRepos.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUserRepos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userRepos = action.payload;
    }
    );
    builder.addCase(fetchUserRepos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Error :(";
    }
    );

  },

});

export default gitSlice;
export const selectUsers = (state: { git: UsersInfo }) => state.git.users;
export const selectIsLoading = (state: { git: UsersInfo }) =>
  state.git.isLoading;
export const selectError = (state: { git: UsersInfo }) => state.git.error;
export const selectUserDetails = (state: { git: UsersInfo }) =>
  state.git.userDetails;
export const selectUserRepos = (state: { git: UsersInfo }) =>  state.git.userRepos;
