// dependencies
import { createSlice } from "@reduxjs/toolkit";

// initial state
const status = {
  // state
  isLoading: true,
  // data
  overview: {
    chartData: [
      { name: "Mon", clicks: 4000 },
      { name: "Tue", clicks: 3000 },
      { name: "Wed", clicks: 2000 },
      { name: "Thu", clicks: 2780 },
      { name: "Fri", clicks: 1890 },
      { name: "Sat", clicks: 2390 },
      { name: "Sun", clicks: 3490 },
    ],
    recentLinks: [
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
    stats: [
      {
        label: "Total Links",
        value: "142",
        change: "+12%",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
      },
      {
        label: "Total Clicks",
        value: "48.2K",
        change: "+24%",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
      },
      {
        label: "Avg. CTR",
        value: "24.8%",
        change: "+4.2%",
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
      },
      {
        label: "Top Location",
        value: "USA",
        change: "42%",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
      },
    ],
    devices: [
      { name: "Mobile", percent: 65, color: "bg-blue-500" },
      { name: "Desktop", percent: 28, color: "bg-purple-500" },
      { name: "Tablet", percent: 7, color: "bg-cyan-500" },
    ],
  },
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
  ],
  profile: {
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
  },
};

// slice
const OverviewSlice = createSlice({
  name: "OverviewSlice",
  initialState: status,
  reducers: {
    handleEditButton: (state) => {
      state.profile.settings.editing = !state.profile.settings.editing;
    },
    updateInfo: (state, action) => {
      state.profile.info = { ...state.profile.info, ...action.payload };
      console.log(state.profile.info);
    },
  },
});

// exports
export default OverviewSlice.reducer;
export const { handleEditButton, updateInfo } = OverviewSlice.actions;
