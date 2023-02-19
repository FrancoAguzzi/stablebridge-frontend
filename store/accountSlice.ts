import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    address: "",
    balance: 200,
  },
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBalance, setAddress } = accountSlice.actions;

export default accountSlice.reducer;
