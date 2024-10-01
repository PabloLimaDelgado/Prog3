import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  user: string | null;
  isLoged: boolean;
}

const initialState: InitialState = {
  user: null,
  isLoged: false,
};

const AuthUser = createSlice({
  name: "AuthUser",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.isLoged = true;
    },

    setLogOut: (state) => {
      (state.user = null), (state.isLoged = false);
    },
  },
});

export const { setLogin, setLogOut } = AuthUser.actions;
export default AuthUser.reducer;
