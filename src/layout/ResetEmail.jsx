// dependencies
import { useState } from "react";
import { cn } from "../utils/ClassMerger";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// icons
import { Mail, ArrowRight } from "lucide-react";
// component
import Button from "../components/Button";

const ForgotEmailStage = ({ onCancel, onNext, errorMsg }) => {
  // state
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // validation
  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  // handle next
  const handleNext = () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      if (onNext) onNext(email);
    }, 1200);
  };

  return (
    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <Header variant={"h3"} className={"mb-0 text-xl"}>
              Forgot password
            </Header>
            <Paragraph variant={"small"} className={"text-xs mb-0"}>
              We'll send a reset code to your email
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        {/* Input */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-medium uppercase tracking-widest text-slate-500">
            Email address
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleNext()}
              placeholder="you@example.com"
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-xl bg-white/3 border text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all duration-150",
                error
                  ? "border-red-500/40 bg-red-500/5 focus:border-red-500/40"
                  : "border-white/[0.07] focus:border-blue-500/40 focus:bg-blue-500/5",
              )}
            />
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
        </div>

        {/* Info box */}
        <div className="p-4 rounded-xl bg-white/3 border border-white/[0.07]">
          <p className="text-[11px] font-medium uppercase tracking-widest text-slate-500 mb-1">
            How it works
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Enter the email linked to your account and we'll send a 6-digit
            verification code to reset your password.
          </p>
        </div>

        {/* error alert */}
        {errorMsg && (
          <p className="text-center text-red-500 font-semibold">{errorMsg}</p>
        )}
      </div>

      {/* Footer */}
      <div className="p-6 pt-0 flex gap-3">
        <Button
          variant={"regular"}
          onClick={onCancel}
          disabled={loading}
          className={cn("flex-1", loading && "cursor-no-drop")}
        >
          Cancel
        </Button>
        <Button
          variant={"primary"}
          onClick={handleNext}
          disabled={loading}
          className={cn(
            "flex-1 gap-2 bg-blue-600 hover:bg-blue-500",
            loading && "opacity-60 cursor-no-drop",
          )}
        >
          {loading ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Next
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ForgotEmailStage;
