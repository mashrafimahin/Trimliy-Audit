// dependencies
import { createSlice } from "@reduxjs/toolkit";

// initial state
const status = {
  activeView: "dashboard",
  mobileToggle: false,
  viewPopup: false,
  viewPopupType: "",
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
    handlePopupView: (state, action) => {
      state.viewPopup = !state.viewPopup;
      state.viewPopupType = action.payload;
    },
  },
});

// exports
export default FlowControlSlice.reducer;
export const { handleView, handleMobileToggle, handlePopupView } =
  FlowControlSlice.actions;
