// dependencies
import { configureStore } from "@reduxjs/toolkit";
// slices
import ProfileSettingData from "../features/ProfileSettingSlice";
import BillingSettingData from "../features/BillingSettingSlice";
import LinksSettingSlice from "../features/LinksSettingSlice";

const Store = configureStore({
  reducer: {
    profileData: ProfileSettingData,
    billingData: BillingSettingData,
    linksData: LinksSettingSlice,
    dashboardPopup: null,
  },
});

export default Store;
