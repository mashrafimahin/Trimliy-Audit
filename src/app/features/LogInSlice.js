// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AccountLogin } from "../../handler/AccountLogin";

// initial state
const info = {
  isLoading: false,
  error: false,
  info: "",
};

// thunk function
export const LoginThunk = createAsyncThunk("user/login", async (formInfo) => {
  const result = await AccountLogin(formInfo);
  return result;
});

// slice
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: info,
  extraReducers: (builder) => {
    builder
      .addCase(LoginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(LoginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.info = "";

        // under condition
        if (action.payload) {
          state.info = action.payload;
          state.error = true;
        }
      })
      .addCase(LoginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.info = "";

        // under condition
        if (action.payload) {
          state.info = action.payload;
          state.error = true;
        }
      });
  },
});

// exports
export default loginSlice.reducer;
