// dependencies
import { configureStore } from "@reduxjs/toolkit";
// slices
import ProfileSettingData from "../features/ProfileSettingSlice";
import BillingSettingData from "../features/BillingSettingSlice";

const Store = configureStore({
  reducer: {
    profileData: ProfileSettingData,
    billingData: BillingSettingData,
    dashboardPopup: null,
  },
});

export default Store;
