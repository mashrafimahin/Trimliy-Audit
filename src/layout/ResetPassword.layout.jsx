// dependencies
import { useState } from "react";
// utils
import { cn } from "../utils/ClassMerger";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// component
import Button from "../components/Button";
// icons
import {
  KeyRound,
  RefreshCw,
  Eye,
  EyeOff,
  CheckCircle2,
  Lock,
} from "lucide-react";

// main
const NewPasswordStage = ({ onDone }) => {
  // state
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showCf, setShowCf] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  // rules
  const rules = [
    { label: "At least 8 characters", ok: password.length >= 8 },
    { label: "One uppercase letter", ok: /[A-Z]/.test(password) },
    { label: "One number", ok: /\d/.test(password) },
  ];
  const allRules = rules.every((r) => r.ok);
  const matches = password && confirm && password === confirm;
  const canSubmit = allRules && matches;

  // handle submit form
  const handleSubmit = () => {
    if (!canSubmit) return;
    setLoading(true);
    setTimeout(() => {
      setDone(true);
      if (onDone) setTimeout(onDone, 100);
    }, 1400);
  };

  // Success state
  if (done) {
    return (
      <div className="relative z-10 p-10 flex flex-col items-center justify-center gap-4 text-center">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-emerald-400" />
        </div>
        <div>
          <Header variant={"h3"} className={"mb-1 text-xl"}>
            Password updated
          </Header>
          <Paragraph
            variant={"small"}
            className={"text-xs mb-0 text-slate-400"}
          >
            Your password has been changed successfully.
          </Paragraph>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-center gap-3 p-6 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
          <Lock className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <Header variant={"h3"} className={"mb-0 text-xl"}>
            Set new password
          </Header>
          <Paragraph variant={"small"} className={"text-xs mb-0"}>
            Choose a strong password for your account
          </Paragraph>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        {/* New password */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-medium uppercase tracking-widest text-slate-500">
            New password
          </label>
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-4 py-3 pr-11 rounded-xl bg-white/3 border border-white/[0.07] text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all duration-150"
            />
            <button
              type="button"
              onClick={() => setShowPw((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showPw ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm password */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-medium uppercase tracking-widest text-slate-500">
            Confirm password
          </label>
          <div className="relative">
            <input
              type={showCf ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Re-enter your password"
              className={cn(
                "w-full px-4 py-3 pr-11 rounded-xl bg-white/3 border text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all duration-150",
                confirm && !matches
                  ? "border-red-500/40 bg-red-500/5 focus:border-red-500/40"
                  : confirm && matches
                    ? "border-emerald-500/40 bg-emerald-500/5 focus:border-emerald-500/40"
                    : "border-white/[0.07] focus:border-blue-500/40 focus:bg-blue-500/5",
              )}
            />
            <button
              type="button"
              onClick={() => setShowCf((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showCf ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {confirm && !matches && (
            <p className="text-xs text-red-400">Passwords do not match.</p>
          )}
          {confirm && matches && (
            <p className="text-xs text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Passwords match
            </p>
          )}
        </div>

        {/* Strength rules */}
        <div className="p-4 rounded-xl bg-white/3 border border-white/[0.07] space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-widest text-slate-500">
            Password requirements
          </p>
          {rules.map((rule) => (
            <div key={rule.label} className="flex items-center gap-2">
              <div
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-colors duration-200",
                  rule.ok ? "bg-emerald-400" : "bg-white/15",
                )}
              />
              <span
                className={cn(
                  "text-xs transition-colors duration-200",
                  rule.ok ? "text-emerald-400" : "text-slate-500",
                )}
              >
                {rule.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-0">
        <Button
          variant={"primary"}
          onClick={handleSubmit}
          disabled={!canSubmit || loading}
          className={cn(
            "w-full gap-2 bg-blue-600 hover:bg-blue-500",
            (!canSubmit || loading) && "opacity-50 cursor-no-drop",
          )}
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              Updating...
            </>
          ) : (
            <>
              <KeyRound className="w-4 h-4" />
              Update password
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default NewPasswordStage;
