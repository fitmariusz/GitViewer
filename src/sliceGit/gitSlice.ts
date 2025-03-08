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
  userDetails: user,
  userRepos: repoList as RepoList[],
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
  },
});

export default gitSlice;
export const selectUsers = (state: { git: UsersInfo }) => state.git.users;
export const selectIsLoading = (state: { git: UsersInfo }) =>
  state.git.isLoading;
export const selectError = (state: { git: UsersInfo }) => state.git.error;
