import { configureStore } from "@reduxjs/toolkit";
import giftsSlice from "../slices/gift.ts";

export const store = configureStore({
  reducer: {
    gift: giftsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
