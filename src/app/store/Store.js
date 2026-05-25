// dependencies
import { configureStore } from "@reduxjs/toolkit";
// slices
import ProfileSettingData from "../features/ProfileSettingSlice";

const Store = configureStore({
  reducer: {
    profileData: ProfileSettingData,
    dashboardPopup: null,
  },
});

export default Store;
