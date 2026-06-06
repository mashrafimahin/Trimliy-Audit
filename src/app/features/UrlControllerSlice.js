// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UrlCreation, UrlDeletion, UrlUpdate } from "../../handler/UrlHandler";

// initial state
const info = {
  isLoading: false,
  error: false,
  message: "",
  showState: false,
  targetedLink: {},
};

// thunk function - create url
export const CreateURL = createAsyncThunk(
  "user/urlCreation",
  async (formInfo) => {
    const state = await UrlCreation(formInfo);
    return state;
  },
);

// thunk function - update url
export const UpdateURL = createAsyncThunk(
  "user/urlUpdate",
  async (formInfo) => {
    const state = await UrlUpdate(formInfo);
    return state;
  },
);

// thunk function - delete url
export const DeleteURL = createAsyncThunk("user/urlDeletion", async (urlId) => {
  await UrlDeletion(urlId);
});

// slice
const UrlControllerSlice = createSlice({
  name: "UrlControllerSlice",
  initialState: info,
  reducers: {
    handleTarget: (state, action) => {
      state.targetedLink = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // ── CreateURL ──
      .addCase(CreateURL.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.showState = false;
      })
      .addCase(CreateURL.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        if (action.payload.success) {
          state.showState = true;
          state.message = action.payload.message;
        } else {
          state.showState = false;
          state.error = true;
          state.message = action.payload.error.split(":")[2];
        }
      })
      .addCase(CreateURL.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.showState = false;
      })

      // ── UpdateURL ──
      .addCase(UpdateURL.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.showState = false;
      })
      .addCase(UpdateURL.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        if (action.payload.success) {
          state.showState = true;
          state.message = action.payload.message;
        } else {
          state.showState = false;
          state.error = true;
          state.message = action.payload.error.split(":")[2];
        }
      })
      .addCase(UpdateURL.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.showState = false;
      })

      // ── DeleteURL ──
      .addCase(DeleteURL.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.showState = false;
      })
      .addCase(DeleteURL.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
        state.showState = false;
        state.targetedLink = {};
      })
      .addCase(DeleteURL.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.showState = false;
        state.message = "Failed to delete the link.";
      });
  },
});

// exports
export default UrlControllerSlice.reducer;
export const { handleTarget } = UrlControllerSlice.actions;
