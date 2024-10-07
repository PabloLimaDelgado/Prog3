import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGift } from "../../types/gift.ts";

interface IInitialState {
  gift: IGift[];
}

const initialState: IInitialState = {
  gift: [],
};

const giftsSlice = createSlice({
  name: "giftState",
  initialState,
  reducers: {
    setGift: (state, action: PayloadAction<IGift[]>) => {
      state.gift = action.payload;
    },
    resetGift: (state) => {
      state.gift = [];
    },
  },
});

export const { setGift, resetGift } = giftsSlice.actions;
export default giftsSlice.reducer;
