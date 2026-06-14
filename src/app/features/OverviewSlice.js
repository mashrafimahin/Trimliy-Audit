// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OverviewFetch } from "../../handler/OverviewFetch";
import { updateExistingUser } from "../../handler/UpdateAccount";

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
    devices: [],
  },
  links: [],
  profile: {
    info: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      company: "",
    },
    settings: {
      editing: false,
      updated: false,
      updateMessage: "",
    },
  },
};

// thunk functions
export const OverviewThunk = createAsyncThunk("user/fetch", async () => {
  const fetchData = await OverviewFetch();
  return fetchData;
});

// thunk function - update user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData) => {
    const fetchData = await updateExistingUser(userData);
    return fetchData;
  },
);

// slice
const OverviewSlice = createSlice({
  name: "OverviewSlice",
  initialState: status,
  reducers: {
    handleEditButton: (state) => {
      state.profile.settings.editing = !state.profile.settings.editing;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(OverviewThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(OverviewThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        // set custom data
        state.links = action.payload.urlData;
        state.profile.info = action.payload.userData;
        state.overview.recentLinks = action.payload.urlData.slice(0, 3);
        state.overview.devices = action.payload.devices;
      })
      .addCase(OverviewThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // update
      .addCase(updateUser.pending, () => {})
      .addCase(updateUser.fulfilled, (state, action) => {
        state.profile.settings.updated = true;
        state.profile.settings.updateMessage = action.payload.message;
        state.profile.settings.editing = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.profile.settings.editing = true;
        state.profile.settings.updateMessage = action.payload.message;
      });
  },
});

// exports
export default OverviewSlice.reducer;
export const { handleEditButton, closeUpdate } = OverviewSlice.actions;
