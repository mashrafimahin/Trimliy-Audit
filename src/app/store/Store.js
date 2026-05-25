// dependencies
import { configureStore } from "@reduxjs/toolkit";
// slices
import ProfileSettingData from "../features/ProfileSettingSlice";
import BillingSettingData from "../features/BillingSettingSlice";
import LinksSettingSlice from "../features/LinksSettingSlice";
import FlowControlSlice from "../features/FlowControlSlice";
import OverviewSlice from "../features/OverviewSlice";

const Store = configureStore({
  reducer: {
    overviewData: OverviewSlice,
    profileData: ProfileSettingData,
    billingData: BillingSettingData,
    linksData: LinksSettingSlice,
    flowControl: FlowControlSlice,
  },
});

export default Store;
