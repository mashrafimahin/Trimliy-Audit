// dependencies
import { configureStore } from "@reduxjs/toolkit";
// slices
import AuthenticationSlice from "../features/AuthenticationSlice";
import BillingSettingData from "../features/BillingSettingSlice";
import FlowControlSlice from "../features/FlowControlSlice";
import OverviewSlice from "../features/OverviewSlice";
import SignUpSlice from "../features/SignUpSlice";
import LogInSlice from "../features/LogInSlice";
import UrlControllerSlice from "../features/UrlControllerSlice";

const Store = configureStore({
  reducer: {
    authControl: AuthenticationSlice,
    overviewData: OverviewSlice,
    billingData: BillingSettingData,
    flowControl: FlowControlSlice,
    signUpControl: SignUpSlice,
    loginControl: LogInSlice,
    urlControl: UrlControllerSlice,
  },
});

export default Store;
