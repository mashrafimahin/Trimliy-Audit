import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthCheck from "../../handler/AuthCheck";

const initialState = {
  logged_in: false,
  isLoading: true,
};

export const AuthThunk = createAsyncThunk(
  "authentication/check",
  async (_, thunkAPI) => {
    try {
      const result = await AuthCheck();

      return result;
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      return thunkAPI.rejectWithValue(false);
    }
  },
);

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
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

export default authenticationSlice.reducer;
