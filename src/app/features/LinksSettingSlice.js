// dependencies
import { createSlice } from "@reduxjs/toolkit";

// initial state
const status = {
  links: [
    {
      id: 1,
      original: "https://github.com/features/actions",
      short: "trim.ly/gh-actions",
      clicks: "12.4K",
      date: "24-10-2026",
      status: "Active",
    },
    {
      id: 2,
      original: "https://linear.app/features",
      short: "trim.ly/linear",
      clicks: "8.2K",
      date: "24-10-2026",
      status: "Active",
    },
    {
      id: 3,
      original: "https://stripe.com/docs/api",
      short: "trim.ly/stripe-api",
      clicks: "4.1K",
      date: "24-10-2026",
      status: "Active",
    },
    {
      id: 4,
      original: "https://notion.so/product",
      short: "trim.ly/notion",
      clicks: "942",
      date: "24-10-2026",
      status: "Inactive",
    },
  ],
};

// slice
const LinksSettingSlice = createSlice({
  name: "LinksSettingSlice",
  initialState: status,
});

// exports
export default LinksSettingSlice.reducer;
// export const { handleEditButton, updateInfo } = LinksSettingSlice.actions;
