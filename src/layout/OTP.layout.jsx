// dependencies
import { useState, useRef } from "react";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// icons
import { ShieldCheck, ArrowRight, RefreshCw, CheckCircle2 } from "lucide-react";
// component
import Button from "../components/Button";
import { cn } from "../utils/ClassMerger";

// main
const OTPStage = ({ onSuccess, onResend, errorMsg }) => {
  // reference - DOM
  const inputs = useRef([]);
  // state
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resent, setResent] = useState(false);

  // organized mail
  const mail = localStorage.getItem("userEmail");
  const userAddress = mail.slice(0, 4) + "****@" + mail.split("@")[1];

  // handle change event
  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  // handle button - keyboard
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  // paste entire code
  const handlePaste = (e) => {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (pasted.length === 6) {
      setOtp(pasted.split(""));
      inputs.current[5]?.focus();
    }
  };

  // next step
  const handleVerify = () => {
    setLoading(true);
    const mergeOTP = otp.join("");
    setTimeout(() => {
      if (onSuccess) onSuccess(mergeOTP);
    }, 1200);
  };

  // resend otp
  const handleResend = () => {
    setResent(true);
    setOtp(["", "", "", "", "", ""]);
    inputs.current[0]?.focus();
    setTimeout(() => onResend(), 3000);
  };

  // initial fill boxes
  const filled = otp.every((d) => d !== "");

  // remove loader
  if (errorMsg) {
    setLoading(false);
  }

  return (
    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-center gap-3 p-6 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <Header variant={"h3"} className={"mb-0 text-xl"}>
            Verify your identity
          </Header>
          <Paragraph variant={"small"} className={"text-xs mb-0"}>
            Enter the 6-digit code sent to{" "}
            <span className="text-slate-300 font-medium">{userAddress}</span>
          </Paragraph>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        {/* OTP inputs */}
        <div className="flex gap-2 justify-center" onPaste={handlePaste}>
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputs.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className={cn(
                "text-center text-lg font-semibold rounded-xl border bg-white/3 text-slate-100",
                "focus:outline-none transition-all duration-150 caret-blue-400",
                errorMsg
                  ? "border-red-500/50 bg-red-500/5 text-red-400"
                  : digit
                    ? "border-blue-500/40 bg-blue-500/5"
                    : "border-white/[0.07] focus:border-blue-500/40 focus:bg-blue-500/5",
              )}
              style={{ width: "2.75rem", height: "3.25rem" }}
            />
          ))}
        </div>

        {/* Error */}
        {errorMsg && (
          <p className="text-center font-semibold text-red-500">{errorMsg}</p>
        )}

        {/* Resent confirmation */}
        {resent && (
          <div className="flex items-center justify-center gap-2 text-xs text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Code resent successfully
          </div>
        )}

        {/* Info box */}
        <div className="p-4 rounded-xl bg-white/3 border border-white/[0.07]">
          <p className="text-[11px] font-medium uppercase tracking-widest text-slate-500 mb-1">
            Didn't receive a code?
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Check your spam folder or wait a moment and request a new code.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-0 flex gap-3">
        <Button
          variant={"regular"}
          onClick={handleResend}
          disabled={loading || resent}
          className={cn(
            "flex-1 gap-2",
            (loading || resent) && "cursor-no-drop",
          )}
        >
          <RefreshCw className={cn("w-4 h-4", resent && "text-emerald-400")} />
          {resent ? "Resent!" : "Resend"}
        </Button>
        <Button
          variant={"primary"}
          onClick={handleVerify}
          disabled={loading || !filled}
          className={cn(
            "flex-1 gap-2 bg-blue-600 hover:bg-blue-500",
            (loading || !filled) && "opacity-50 cursor-no-drop",
          )}
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              Verifying...
            </>
          ) : (
            <>
              Verify
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default OTPStage;
