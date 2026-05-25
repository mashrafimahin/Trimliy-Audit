// dependencies
import { createSlice } from "@reduxjs/toolkit";

// initial state
const status = {
  activeView: "dashboard",
  mobileToggle: false,
};

// slice
const FlowControlSlice = createSlice({
  name: "FlowControlSlice",
  initialState: status,
  reducers: {
    handleView: (state, action) => {
      state.activeView = action.payload;
    },
    handleMobileToggle: (state) => {
      state.mobileToggle = !state.mobileToggle;
    },
  },
});

// exports
export default FlowControlSlice.reducer;
export const { handleView, handleMobileToggle } = FlowControlSlice.actions;
