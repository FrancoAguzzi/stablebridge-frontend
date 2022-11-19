import { createSlice } from "@reduxjs/toolkit";

export const rampInfoSlice = createSlice({
  name: "rampInfo",
  initialState: {
    token: "SBRL",
    chain: "",
    amount: null,
    pixData: {},
  },
  reducers: {
    setChain: (state, action) => {
      state.chain = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setPixData: (state, action) => {
      state.pixData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChain, setAmount, setPixData } = rampInfoSlice.actions;

export default rampInfoSlice.reducer;
