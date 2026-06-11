import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthCheck from "../../handler/AuthCheck";
import { setNewPassword } from "../../handler/ResetPassword";
import { deleteAccountPermanently } from "../../handler/DeleteAccount";

const initialState = {
  logged_in: false,
  isLoading: true,
  error: false,
  info: "",
  isPasswordUpdating: false,
  isAccountDeleting: false,
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

// thunk for changing password
export const changePasswordThunk = createAsyncThunk(
  "authentication/changePassword",
  async (password) => {
    const result = await setNewPassword(password);
    return result;
  },
);

// thunk for deleting account
export const deleteAccountThunk = createAsyncThunk(
  "authentication/deleteAccount",
  async (password) => {
    const result = await deleteAccountPermanently(password);
    return result;
  },
);

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    resetSecurityMessage: (state) => {
      state.error = false;
      state.info = "";
    },
  },
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
      })
      // password change
      .addCase(changePasswordThunk.pending, (state) => {
        state.isPasswordUpdating = true;
        state.error = false;
        state.info = "";
      })
      .addCase(changePasswordThunk.fulfilled, (state, action) => {
        state.isPasswordUpdating = false;
        if (action.payload.success) {
          state.error = false;
          state.info =
            action.payload.message || "Password updated successfully";
        } else {
          state.error = true;
          state.info = action.payload.message || "Failed to update password";
        }
      })
      .addCase(changePasswordThunk.rejected, (state, action) => {
        state.isPasswordUpdating = false;
        state.error = false;
        state.info = "";
        if (action.payload) {
          state.info = action.payload;
          state.error = true;
        }
      })
      // account deletion
      .addCase(deleteAccountThunk.pending, (state) => {
        state.isAccountDeleting = true;
        state.error = false;
        state.info = "";
      })
      .addCase(deleteAccountThunk.fulfilled, (state, action) => {
        state.isAccountDeleting = false;
        if (action.payload.success) {
          state.error = false;
          state.info = action.payload.message || "Account deleted successfully";
        } else {
          state.error = true;
          state.info = action.payload.message || "Failed to delete account";
        }
      })
      .addCase(deleteAccountThunk.rejected, (state, action) => {
        state.isAccountDeleting = false;
        state.error = false;
        state.info = "";
        if (action.payload) {
          state.info = action.payload;
          state.error = true;
        }
      });
  },
});

export default authenticationSlice.reducer;
export const { resetSecurityMessage } = authenticationSlice.actions;
