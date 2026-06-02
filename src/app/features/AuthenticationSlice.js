// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkFunc } from "../../handler/Authentication";

// initial state
const info = {
  logged_in: false,
  isLoading: false,
};

// thunk function
export const AuthThunk = createAsyncThunk(
  "user/authentication",
  async (local_data) => {
    const state = await checkFunc(local_data);
    return state;
  },
);

// slice
const authSlice = createSlice({
  name: "authSlice",
  initialState: info,
  extraReducers: (builder) => {
    builder
      .addCase(AuthThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AuthThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.logged_in = action.payload;
      })
      .addCase(AuthThunk.rejected, (state) => {
        state.isLoading = false;
        state.logged_in = false;
      });
  },
});

// exports
export default authSlice.reducer;
