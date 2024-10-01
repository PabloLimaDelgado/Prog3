import { configureStore } from "@reduxjs/toolkit";
import authUser from "../slices/auth.ts";

export const store = configureStore({
  reducer: {
    auth: authUser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
