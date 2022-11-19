import { createSlice } from "@reduxjs/toolkit";

export const destinyTransactionInfo = createSlice({
  name: "destinyTransactionInfo",
  initialState: {
    chain: "",
    token: 1,
  },
  reducers: {
    setDestinyChain: (state, action) => {
      state.chain = action.payload;
    },
    setDestinyToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDestinyChain, setDestinyToken } =
  destinyTransactionInfo.actions;

export default destinyTransactionInfo.reducer;
