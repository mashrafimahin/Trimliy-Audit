// dependencies
import { configureStore } from "@reduxjs/toolkit";
// slices
import AuthenticationSlice from "../features/AuthenticationSlice";
import ProfileSettingData from "../features/ProfileSettingSlice";
import BillingSettingData from "../features/BillingSettingSlice";
import LinksSettingSlice from "../features/LinksSettingSlice";
import FlowControlSlice from "../features/FlowControlSlice";
import OverviewSlice from "../features/OverviewSlice";
import SignUpSlice from "../features/SignUpSlice";
import LogInSlice from "../features/LogInSlice";

const Store = configureStore({
  reducer: {
    authControl: AuthenticationSlice,
    overviewData: OverviewSlice,
    profileData: ProfileSettingData,
    billingData: BillingSettingData,
    linksData: LinksSettingSlice,
    flowControl: FlowControlSlice,
    signUpControl: SignUpSlice,
    loginControl: LogInSlice,
  },
});

export default Store;
