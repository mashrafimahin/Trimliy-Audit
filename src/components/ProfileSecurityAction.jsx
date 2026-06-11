// dependencies
import { useState } from "react";
// utils
import { cn } from "../utils/ClassMerger";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// component
import Button from "./Button";
// icons
import {
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Trash2,
  RefreshCw,
} from "lucide-react";
// Redux
import { useSlices } from "../hooks/useSlices";
import {
  changePasswordThunk,
  deleteAccountThunk,
  resetSecurityMessage,
} from "../app/features/AuthenticationSlice";

// main
const ProfileSecurityAction = () => {
  const { data: authData, dispatch } = useSlices("authControl");

  // Provide default values if data is undefined
  const data = authData || {
    error: false,
    info: "",
    isPasswordUpdating: false,
    isAccountDeleting: false,
  };

  // PASSWORD CHANGE STATE
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showCf, setShowCf] = useState(false);

  // ACCOUNT DELETION STATE
  const [deletePassword, setDeletePassword] = useState("");
  const [showDeletePw, setShowDeletePw] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);

  // PASSWORD VALIDATION RULES
  const rules = [
    { label: "At least 8 characters", ok: password.length >= 8 },
    { label: "One uppercase letter", ok: /[A-Z]/.test(password) },
    { label: "One number", ok: /\d/.test(password) },
  ];
  const allRules = rules.every((r) => r.ok);
  const matches = password && confirm && password === confirm;
  const canSubmitPassword = allRules && matches;

  // HANDLE PASSWORD CHANGE
  const handlePasswordChange = async () => {
    if (!canSubmitPassword) return;
    try {
      const result = await dispatch(changePasswordThunk(password)).unwrap();
      if (result.success) {
        setPassword("");
        setConfirm("");
        setTimeout(() => {
          dispatch(resetSecurityMessage());
        }, 2000);
      }
    } catch (err) {
      console.error("Password change failed:", err);
    }
  };

  // HANDLE ACCOUNT DELETION
  const handleAccountDeletion = async () => {
    if (!deletePassword) {
      return;
    }
    if (!deleteConfirmed) {
      return;
    }

    try {
      await dispatch(deleteAccountThunk(deletePassword)).unwrap();
    } catch (err) {
      console.error("Account deletion failed:", err);
    }
  };

  // SUCCESS MESSAGE FOR PASSWORD
  if (!data.error && data.info && data.info.includes("Password updated")) {
    return (
      <div className="p-6 md:p-8 space-y-6">
        <Header variant={"h3"}>Security Settings</Header>

        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <Header variant={"h3"} className={"mb-1 text-xl"}>
              Password updated successfully
            </Header>
            <Paragraph
              variant={"small"}
              className={"text-xs mb-0 text-slate-400"}
            >
              Your password has been changed successfully. Your account is now
              more secure.
            </Paragraph>
          </div>
        </div>
      </div>
    );
  }

  // SUCCESS MESSAGE FOR ACCOUNT DELETION
  if (!data.error && data.info && data.info.includes("Account deleted")) {
    return (
      <div className="p-6 md:p-8 space-y-6">
        <Header variant={"h3"}>Security Settings</Header>

        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7 text-red-400" />
          </div>
          <div>
            <Header variant={"h3"} className={"mb-1 text-xl"}>
              Account deleted
            </Header>
            <Paragraph
              variant={"small"}
              className={"text-xs mb-0 text-slate-400"}
            >
              Your account has been permanently deleted. Redirecting...
            </Paragraph>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 space-y-8">
      <Header variant={"h3"}>Security Settings</Header>

      {/* CHANGE PASSWORD SECTION */}
      <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/2">
        {/* Header */}
        <div className="flex items-center gap-3 p-6 border-b border-white/5 bg-white/3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
            <Lock className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <Header variant={"h3"} className={"mb-0 text-lg"}>
              Change Password
            </Header>
            <Paragraph variant={"small"} className={"text-xs mb-0"}>
              Update your password to keep your account secure
            </Paragraph>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Error Message */}
          {data.error && data.info && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <p className="text-sm text-red-300">{data.info}</p>
            </div>
          )}

          {/* New password */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium uppercase tracking-widest text-slate-500">
              New password
            </label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (data.error) {
                    dispatch(resetSecurityMessage());
                  }
                }}
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
                onChange={(e) => {
                  setConfirm(e.target.value);
                  if (data.error) {
                    dispatch(resetSecurityMessage());
                  }
                }}
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
        <div className="p-6 pt-0 flex justify-end">
          <Button
            onClick={handlePasswordChange}
            disabled={!canSubmitPassword || data.isPasswordUpdating}
            className={cn(
              "gap-2 bg-blue-600 hover:bg-blue-500",
              (!canSubmitPassword || data.isPasswordUpdating) &&
                "opacity-50 cursor-no-drop",
            )}
          >
            {data.isPasswordUpdating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Updating...
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Update password
              </>
            )}
          </Button>
        </div>
      </div>

      {/* DELETE ACCOUNT SECTION */}
      <div className="border border-red-500/20 rounded-2xl overflow-hidden bg-red-500/5">
        {/* Header */}
        <div className="flex items-center gap-3 p-6 border-b border-red-500/10 bg-red-500/10">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
            <Trash2 className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <Header variant={"h3"} className={"mb-0 text-lg"}>
              Delete Account
            </Header>
            <Paragraph variant={"small"} className={"text-xs mb-0"}>
              Permanently delete your account and all associated data
            </Paragraph>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Warning Message */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-red-300 mb-1">
                This action cannot be undone
              </p>
              <p className="text-xs text-red-300/70">
                Deleting your account will permanently remove all your data
                including shortened links, analytics, and account information.
              </p>
            </div>
          </div>

          {/* Error Message */}
          {data.error && data.info && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-red-600/20 border border-red-500/30">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <p className="text-sm text-red-300">{data.info}</p>
            </div>
          )}

          {/* Password confirmation */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium uppercase tracking-widest text-slate-500">
              Enter your password to confirm
            </label>
            <div className="relative">
              <input
                type={showDeletePw ? "text" : "password"}
                value={deletePassword}
                onChange={(e) => {
                  setDeletePassword(e.target.value);
                  if (data.error) {
                    dispatch(resetSecurityMessage());
                  }
                }}
                placeholder="Enter password"
                className={cn(
                  "w-full px-4 py-3 pr-11 rounded-xl bg-white/3 border text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all duration-150",
                  deletePassword
                    ? "border-red-500/40 bg-red-500/5 focus:border-red-500/40"
                    : "border-white/[0.07] focus:border-red-500/40 focus:bg-red-500/5",
                )}
              />
              <button
                type="button"
                onClick={() => setShowDeletePw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showDeletePw ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Confirmation checkbox */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/3 border border-white/[0.07]">
            <input
              type="checkbox"
              checked={deleteConfirmed}
              onChange={(e) => {
                setDeleteConfirmed(e.target.checked);
                if (data.error) {
                  dispatch(resetSecurityMessage());
                }
              }}
              id="deleteConfirm"
              className="w-4 h-4 rounded cursor-pointer accent-red-500"
            />
            <label
              htmlFor="deleteConfirm"
              className="text-sm text-slate-300 cursor-pointer flex-1"
            >
              I understand that this action is permanent and cannot be reversed
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0 flex justify-end">
          <Button
            onClick={handleAccountDeletion}
            disabled={
              !deletePassword || !deleteConfirmed || data.isAccountDeleting
            }
            className={cn(
              "gap-2 bg-red-600 hover:bg-red-700",
              (!deletePassword || !deleteConfirmed || data.isAccountDeleting) &&
                "opacity-50 cursor-no-drop",
            )}
          >
            {data.isAccountDeleting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="w-4 h-4" />
                Delete Account Permanently
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSecurityAction;
