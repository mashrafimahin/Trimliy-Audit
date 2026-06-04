// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OverviewFetch } from "../../handler/OverviewFetch";

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
    recentLinks: [],
    stats: [
      {
        label: "Total Links",
        value: 0,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
      },
      {
        label: "Total Clicks",
        value: 0,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
      },
      {
        label: "Avg. CTR",
        value: 0,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
      },
      {
        label: "Top Location",
        value: 0,
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
  links: [],
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

// thunk functions
export const OverviewThunk = createAsyncThunk("user/fetch", async () => {
  const fetchData = await OverviewFetch();
  return fetchData;
});

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
  extraReducers: (builder) => {
    builder
      .addCase(OverviewThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(OverviewThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        // set custom data
        state.overview.recentLinks.push(...action.payload.urlData);
        state.links.push(...action.payload.urlData);
        state.profile.info = action.payload.userData;
        // console.log(action.payload.userData);
      })
      .addCase(OverviewThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// exports
export default OverviewSlice.reducer;
export const { handleEditButton, updateInfo } = OverviewSlice.actions;
