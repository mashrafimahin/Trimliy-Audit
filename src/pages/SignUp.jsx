// dependencies
import { Link } from "react-router";
import { useEffect, useState } from "react";
// icons
import { Eye, EyeOff, GitCompareArrows, Mail } from "lucide-react";
// typography
import Header from "../typography/Header";
// components
import Input from "../components/Input";
import Button from "../components/Button";
// layouts

// data
const cards = [
  "Advanced Analytics",
  "Custom Domains",
  "Team Collaboration",
  "Dynamic QR Codes",
];

// main
function SignUp() {
  // eye button controlled
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
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

  // handle clicks
  const handleClick = () => {
    setLoading(true);
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // checkpoint
    if (
      formInfo.firstName.trim() === "" ||
      formInfo.lastName.trim() === "" ||
      formInfo.email.trim() === "" ||
      formInfo.password.trim() === ""
    ) {
      alert("You must need to fill the input boxes.");
      return;
    }
    // button func
    handleClick();
  };

  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex bg-navy-900 flex-row-reverse">
      {/* Right side - Artwork */}
      <div className="hidden lg:flex flex-1 relative bg-navy-950 overflow-hidden items-center justify-center border-l border-white/5">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 blur-[120px] rounded-full" />

        {/* cards */}
        <div className="relative z-10 max-w-lg text-center px-12">
          <div>
            <Header variant={"h2"} className={"text-5xl"}>
              Start building smarter links today.
            </Header>
            <div className="grid grid-cols-2 gap-4 text-left mt-10">
              {cards.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative">
        <div className="w-full max-w-md">
          <div>
            {/* headings */}
            <h1 className="text-3xl font-bold text-white mb-2">
              Create an account
            </h1>
            <p className="text-slate-400 mb-8">
              Join thousands of modern teams optimizing their links.
            </p>

            {/* signup forms */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {/* firstName */}
                <div className="space-y-2">
                  <label className="text-md font-medium text-slate-300">
                    First Name
                  </label>
                  <Input
                    type={"text"}
                    name={"firstName"}
                    value={formInfo.firstName}
                    setValue={changeFormData}
                    placeholder={"John"}
                    className={
                      "border border-gray-100/30 px-4 mt-2 outline-none"
                    }
                  />
                </div>
                {/* lastName */}
                <div className="space-y-2">
                  <label className="text-md font-medium text-slate-300">
                    Last Name
                  </label>
                  <Input
                    type={"text"}
                    name={"lastName"}
                    value={formInfo.lastName}
                    setValue={changeFormData}
                    placeholder={"Doe"}
                    className={
                      "border border-gray-100/30 px-4 mt-2 outline-none"
                    }
                  />
                </div>
              </div>
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
                  placeholder={"john@example.com"}
                  className={"border border-gray-100/30 px-4 mt-2 outline-none"}
                />
              </div>
              {/* password */}
              <div className="space-y-2">
                <label className="text-md font-medium text-slate-300">
                  Password
                </label>
                <div className="flex items-center justify-between rounded-md border border-gray-100/30 px-4 mt-2">
                  <Input
                    type={visible ? "text" : "password"}
                    name={"password"}
                    value={formInfo.password}
                    setValue={changeFormData}
                    placeholder={"••••••••"}
                    className={"px-1 outline-none"}
                  />
                  <span className="cursor-pointer" onClick={handleVisible}>
                    {!visible ? <Eye size={20} /> : <EyeOff size={20} />}
                  </span>
                </div>
              </div>
              {/* button */}
              <Button
                type={"submit"}
                className={`min-w-full mt-8 ${loading ? "bg-blue-600/50 cursor-no-drop" : ""}`}
                disabled={loading}
              >
                {loading ? "Creating Account ..." : "Sign Up"}
              </Button>
            </form>

            {/* breakpoint */}
            <div className="flex items-center gap-4 my-8">
              <div className="h-px bg-white/10 flex-1"></div>
              <span className="text-sm text-slate-500">or sign up with</span>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>

            {/* direct link */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button variant={"regular"} className={"min-w-full"}>
                <GitCompareArrows size={18} className="mr-2" />
                GitHub
              </Button>
              <Button variant={"regular"} className={"min-w-full"}>
                <Mail size={18} className="mr-2" />
                Gmail
              </Button>
            </div>

            {/* login */}
            <p className="text-center text-sm text-slate-400 mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-400 hover:text-blue-300 font-medium hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
