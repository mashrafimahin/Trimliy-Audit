// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UrlCreation } from "../../handler/UrlHandler";

// initial state
const info = {
  isLoading: false,
  error: false,
  message: "",
  showState: false,
};

// thunk function - create url
export const CreateURL = createAsyncThunk(
  "user/urlCreation",
  async (formInfo) => {
    const state = await UrlCreation(formInfo);
    console.log(state);
    return state;
  },
);

// slice
const UrlControllerSlice = createSlice({
  name: "UrlControllerSlice",
  initialState: info,
  extraReducers: (builder) => {
    builder
      // case's for creating url
      .addCase(CreateURL.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.showState = false;
      })
      .addCase(CreateURL.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;

        // checking
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
      });
  },
});

// exports
export default UrlControllerSlice.reducer;
