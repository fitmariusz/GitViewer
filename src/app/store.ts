import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import gitSlice from '../sliceGit/gitSlice';

export const store = configureStore({
    reducer: {


        git: gitSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
