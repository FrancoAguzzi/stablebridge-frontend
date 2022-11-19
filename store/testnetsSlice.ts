import { createSlice } from "@reduxjs/toolkit";

export const testnetsSlice = createSlice({
  name: "testnets",
  initialState: {
    showOnly: false,
  },
  reducers: {
    setShowOnly: (state, action) => {
      state.showOnly = !!action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowOnly } = testnetsSlice.actions;

export default testnetsSlice.reducer;
