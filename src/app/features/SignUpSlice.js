// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AccountCreation } from "../../handler/AccountCreation";

// initial state
const info = {
  isLoading: false,
  isComplete: false,
};

// thunk function
export const signUpThunk = createAsyncThunk("user/signup", AccountCreation);

// slice
const signUpSlice = createSlice({
  name: "signUpSlice",
  initialState: info,
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
        state.isComplete = false;
      })
      .addCase(signUpThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isComplete = true;
      })
      .addCase(signUpThunk.rejected, (state) => {
        state.isLoading = false;
        state.isComplete = false;
      });
  },
});

// exports
export default signUpSlice.reducer;
