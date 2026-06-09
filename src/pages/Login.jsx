// dependencies
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useSlices } from "../hooks/useSlices";
import { handleForgotPassword, LoginThunk } from "../app/features/LogInSlice";

// icons
import { Eye, EyeOff, GitCompareArrows, Link2, Mail } from "lucide-react";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// components
import Input from "../components/Input";
import Button from "../components/Button";
// layout
import PasswordOutlet from "../components/PasswordOutlet";

// main
function Login() {
  // states
  const { data, dispatch } = useSlices("loginControl");

  // eye button controlled
  const [visible, setVisible] = useState(false);
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
  });

  // handle form info edit
  const changeFormData = (event) => {
    setFormInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // handleVisible
  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };

  // handle forget password
  const handleForgetPassword = () => {
    dispatch(handleForgotPassword());
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // checkpoint
    if (formInfo.email.trim() === "" || formInfo.password.trim() === "") {
      alert("You must need to fill the input boxes.");
      return;
    }
    // login
    dispatch(LoginThunk(formInfo));
  };

  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // popup - reset password
  if (data.forgotPassword) {
    return <PasswordOutlet />;
  }

  return (
    <div className="min-h-screen flex bg-navy-900">
      {/* Left side - Artwork */}
      <div className="hidden lg:flex flex-1 relative bg-navy-950 overflow-hidden items-center justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 blur-[120px] rounded-full" />
        {/* icons and header */}
        <div className="relative z-10 max-w-lg text-center px-12">
          <div>
            <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/30">
              <Link2 className="text-white w-10 h-10" />
            </div>
            <Header variant={"h3"}>Welcome back to Trimly</Header>
            <Paragraph variant={"small"}>
              Manage your links, track analytics, and optimize your campaigns in
              one powerful dashboard.
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative">
        <div className="w-full max-w-md">
          <div>
            {/* headings */}
            <h1 className="text-3xl font-bold text-white mb-2">Log in</h1>
            <p className="text-slate-400 mb-8">
              Enter your details to access your account.
            </p>

            {/* direct link */}
            <div className="space-y-4 mb-8 flex flex-col items-center justify-center">
              <Button variant={"regular"} className={"min-w-full"}>
                <GitCompareArrows size={18} className="mr-4" />
                Continue with GitHub
              </Button>
              <Button variant={"regular"} className={"min-w-full"}>
                <Mail size={18} className="mr-4" />
                Continue with Google
              </Button>
            </div>

            {/* break point */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-white/10 flex-1"></div>
              <span className="text-sm text-slate-500">
                or sign in with email
              </span>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>

            {/* login form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* email */}
              <div className="space-y-2">
                <label className="text-md font-medium text-slate-300">
                  Email Address
                </label>
                <Input
                  type={"email"}
                  name={"email"}
                  value={formInfo.email}
                  setValue={changeFormData}
                  placeholder={"name@user.com"}
                  className={"border border-gray-100/30 px-4 mt-2 outline-none"}
                />
              </div>
              {/* forgot/password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-md font-medium text-slate-300">
                    Password
                  </label>
                  <span
                    onClick={handleForgetPassword}
                    className="text-sm text-blue-400 hover:text-blue-300 cursor-pointer"
                  >
                    Forgot password?
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-md border border-gray-100/30 px-4 mt-2">
                  <Input
                    type={visible ? "text" : "password"}
                    name={"password"}
                    value={formInfo.password}
                    setValue={changeFormData}
                    placeholder={"••••••••"}
                    className={"px-1 outline-none border-transparent"}
                  />
                  <span className="cursor-pointer" onClick={handleVisible}>
                    {!visible ? <Eye size={20} /> : <EyeOff size={20} />}
                  </span>
                </div>
                {data.error && (
                  <div>
                    <p className="text-red-500 font-semibold text-md text-center">
                      {data.info}
                    </p>
                  </div>
                )}
              </div>
              {/* login */}
              <Button
                type={"submit"}
                className={`min-w-full mt-8 ${data.isLoading ? "bg-blue-600/50 cursor-no-drop" : ""}`}
                disabled={data.isLoading}
              >
                {data.isLoading ? "Singing In ..." : "Sign In"}
              </Button>
            </form>

            {/* sign up link */}
            <p className="text-center text-sm text-slate-400 mt-8">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-400 hover:text-blue-300 font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
