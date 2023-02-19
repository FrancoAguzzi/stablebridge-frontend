import { createSlice } from "@reduxjs/toolkit";

export const vaultInfoSlice = createSlice({
  name: "vaultInfo",
  initialState: {
    token: "SBRL",
    chain: "",
    amount: null,
  },
  reducers: {
    setChain: (state, action) => {
      state.chain = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChain, setAmount } = vaultInfoSlice.actions;

export default vaultInfoSlice.reducer;
