// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AccountLogin } from "../../handler/AccountLogin";

// initial state
const info = {
  isLoading: false,
};

// thunk function
export const LoginThunk = createAsyncThunk("user/login", async (formInfo) => {
  await AccountLogin(formInfo);
});

// slice
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: info,
  extraReducers: (builder) => {
    builder
      .addCase(LoginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(LoginThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// exports
export default loginSlice.reducer;
