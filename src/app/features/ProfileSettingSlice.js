// dependencies
import { createSlice } from "@reduxjs/toolkit";

// initial state
const profile = {
  info: {
    img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    firstName: "Mashrafi",
    lastName: "Mahin",
    userName: "@mashrafi120",
    email: "mahin123@gmail.com",
    company: "",
  },
  settings: {
    editing: false,
  },
};

// slice
const profileSettingSlice = createSlice({
  name: "profileSettingSlice",
  initialState: profile,
  reducers: {
    handleEditButton: (state) => {
      state.settings.editing = !state.settings.editing;
    },
    updateInfo: (state, action) => {
      state.info = { ...state.info, ...action.payload };
    },
  },
});

// exports
export default profileSettingSlice.reducer;
export const { handleEditButton, updateInfo } = profileSettingSlice.actions;
