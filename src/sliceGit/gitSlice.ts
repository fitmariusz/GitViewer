import { createSlice } from "@reduxjs/toolkit";
import { RepoList, UserDetails, UsersFetch } from "../app/userTypes";

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

const gitSlice = createSlice({
  name: "git",
  initialState,
  reducers: {},
});

export default gitSlice;

