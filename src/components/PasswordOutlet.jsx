// dependencies
import { useSlices } from "../hooks/useSlices";
import {
  handleShutDownChanges,
  passOTP,
  setPassword,
} from "../app/features/LogInSlice";
import { sendMail } from "../app/features/LogInSlice";
// layouts
import OTPStage from "../layout/OTP.layout";
import ForgotEmailStage from "../layout/ResetEmail";
import NewPasswordStage from "../layout/ResetPassword.layout";

// main
const PasswordOutlet = () => {
  // states
  const { data, dispatch } = useSlices("loginControl");

  // handle shut the process
  const handleClose = () => {
    dispatch(handleShutDownChanges());
  };

  // go next to otp
  const toOTP = (email) => {
    dispatch(sendMail(email));
  };

  // go next to new password
  const toNewPass = (otp) => {
    dispatch(passOTP(otp));
  };

  // resend otp
  const resendOTP = () => {
    const mail = localStorage.getItem("userEmail");
    dispatch(sendMail(mail));
  };

  // set new pass
  const setNewPass = (pass) => {
    dispatch(setPassword(pass));
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {data.sendMail && !data.resetPassword && !data.otpStage && (
        <ForgotEmailStage
          onCancel={handleClose}
          onNext={toOTP}
          errorMsg={data.info}
        />
      )}
      {!data.sendMail && !data.resetPassword && data.otpStage && (
        <OTPStage
          onSuccess={toNewPass}
          onResend={resendOTP}
          errorMsg={data.info}
        />
      )}
      {!data.sendMail && data.resetPassword && !data.otpStage && (
        <NewPasswordStage onDone={setNewPass} />
      )}
    </div>
  );
};

export default PasswordOutlet;
