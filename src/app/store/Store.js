// dependencies
import { configureStore } from "@reduxjs/toolkit";
// slices
import ProfileSettingData from "../features/ProfileSettingSlice";
import BillingSettingData from "../features/BillingSettingSlice";
import LinksSettingSlice from "../features/LinksSettingSlice";
import FlowControlSlice from "../features/FlowControlSlice";

const Store = configureStore({
  reducer: {
    profileData: ProfileSettingData,
    billingData: BillingSettingData,
    linksData: LinksSettingSlice,
    flowControl: FlowControlSlice,
  },
});

export default Store;
