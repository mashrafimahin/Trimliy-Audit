// dependencies
import { createSlice } from "@reduxjs/toolkit";

// initial state
const status = {
  details: {
    type: "Pro Plan",
    cost: 25,
    nextBillingDate: "26-10-2026",
    features: [
      "100,000 tracked clicks/mo",
      "Custom domains (up to 5)",
      "Advanced analytics",
      "Team members (up to 3)",
    ],
    card: "VISA",
    cardLastDigit: 4242,
    expiryDate: "12/28",
    paymentHistory: [
      { date: "Sep 1, 2026", amount: "$29.00", status: "Paid" },
      { date: "Aug 1, 2026", amount: "$29.00", status: "Paid" },
      { date: "Jul 1, 2026", amount: "$29.00", status: "Paid" },
    ],
  },
};

// slice
const billingSettingSlice = createSlice({
  name: "billingSettingSlice",
  initialState: status,
});

// exports
export default billingSettingSlice.reducer;
// export const { handleEditButton, updateInfo } = billingSettingSlice.actions;
