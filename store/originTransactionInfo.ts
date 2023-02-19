import { createSlice } from "@reduxjs/toolkit";

export const originTransactionInfo = createSlice({
  name: "originTransactionInfo",
  initialState: {
    chain: "5",
    token: 1,
  },
  reducers: {
    setOriginChain: (state, action) => {
      state.chain = action.payload;
    },
    setOriginToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOriginChain, setOriginToken } = originTransactionInfo.actions;

export default originTransactionInfo.reducer;
