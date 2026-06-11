// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AccountLogin } from "../../handler/AccountLogin";
import {
  sendRecoveryEmail,
  sendRecoveryOTP,
  setNewPassword,
} from "../../handler/ResetPassword";

// initial state
const info = {
  isLoading: false,
  error: false,
  info: "",
  sendMail: false,
  otpStage: false,
  forgotPassword: false,
  resetPassword: false,
};

// thunk function - login
export const LoginThunk = createAsyncThunk("user/login", async (formInfo) => {
  const result = await AccountLogin(formInfo);
  return result;
});

// thunk function - send recovery mail
export const sendMail = createAsyncThunk("user/recovery", async (mail) => {
  const result = await sendRecoveryEmail(mail);
  return result;
});

// thunk function - send otp
export const passOTP = createAsyncThunk("user/otp", async (otp) => {
  const result = await sendRecoveryOTP(otp);
  return result;
});

// thunk function - set new password
export const setPassword = createAsyncThunk(
  "user/setNewPassword",
  async (pass) => {
    const result = await setNewPassword(pass);
    return result;
  },
);

// slice
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: info,
  reducers: {
    handleShutDownChanges: (state) => {
      state.forgotPassword = !state.forgotPassword;
      state.sendMail = false;
      state.otpStage = false;
      state.forgotPassword = false;
      state.resetPassword = false;
    },
    handleForgotPassword: (state) => {
      state.forgotPassword = !state.forgotPassword;
      state.sendMail = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // login process
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
      })

      // send email
      .addCase(sendMail.pending, (state) => {
        state.isLoading = false;
        state.error = false;
        state.info = "";
      })
      .addCase(sendMail.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.sendMail = false;
          state.otpStage = true;
        } else {
          ((state.error = true), (state.info = action.payload.message));
        }
      })
      .addCase(sendMail.rejected, (state, action) => {
        state.error = false;
        state.info = "";
        // under condition
        if (action.payload) {
          state.info = action.payload;
          state.error = true;
        }
      })

      // send otp
      .addCase(passOTP.pending, (state) => {
        state.isLoading = false;
        state.error = false;
        state.info = "";
      })
      .addCase(passOTP.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.otpStage = false;
          state.resetPassword = true;
        } else {
          ((state.error = true), (state.info = action.payload.message));
        }
      })
      .addCase(passOTP.rejected, (state, action) => {
        state.error = false;
        state.info = "";
        // under condition
        if (action.payload) {
          state.info = action.payload;
          state.error = true;
        }
      })

      // set password
      .addCase(setPassword.pending, (state) => {
        state.isLoading = false;
        state.error = false;
        state.info = "";
      })
      .addCase(setPassword.fulfilled, (state, action) => {
        if (action.payload.success) {
          setTimeout(() => {
            window.location.href = action.payload.redirectTo;
          }, 600);
        } else {
          ((state.error = true), (state.info = action.payload.message));
        }
      })
      .addCase(setPassword.rejected, (state, action) => {
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
export const {
  handleShutDownChanges,
  handleForgotPassword,
  handleToNewPassword,
} = loginSlice.actions;
