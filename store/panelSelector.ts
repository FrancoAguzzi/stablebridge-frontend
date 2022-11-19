import { createSlice } from "@reduxjs/toolkit";

export const panelSelector = createSlice({
  name: "panelSelector",
  initialState: {
    show: false,
    step: 1,
  },
  reducers: {
    setShow: (state, action) => {
      state.show = !!action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShow, setStep } = panelSelector.actions;

export default panelSelector.reducer;
