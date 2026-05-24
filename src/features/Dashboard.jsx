// dependencies
import { Suspense, useState } from "react";
// icons
import { Search, Bell, Menu } from "lucide-react";
// layouts
import Overview from "../layout/Overview.layout";
import Links from "../layout/Links.layout";
import Payment from "../layout/Payment.layout";
import Profile from "../layout/Profile.layout";
// components
import Loader from "../components/Loader";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";
// data
import { overview as data } from "../static/Dashboard.info";

// View mapping
const VIEW_COMPONENTS = {
  overview: Overview,
  links: Links,
  analytics: null,
  qr: null,
  teams: null,
  billing: Payment,
  profile: Profile,
};

// main
const Dashboard = () => {
  // state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState("overview");

  // Get current view component
  const CurrentViewComponent = VIEW_COMPONENTS[activeView];
  const viewData = data[activeView];

  // Handle view change from sidebar
  const handleViewChange = (viewKey) => {
    setActiveView(viewKey);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-navy-900 overflow-hidden">
      {/* sidebar */}
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        activeView={activeView}
        onViewChange={handleViewChange}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto relative">
        {/* light effect */}
        <div className="absolute top-0 right-0 w-[40%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Top-bar */}
        <header className="h-20 shrink-0 flex items-center justify-between px-6 border-b border-white/5 bg-navy-900/80 backdrop-blur-md z-10">
          {/* features */}
          <div className="flex items-center gap-4 flex-1">
            {/* humberger */}
            <button
              className="lg:hidden text-slate-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            {/* search bar */}
            <div className="hidden sm:flex items-center relative max-w-md w-full">
              <Search className="w-5 h-5 absolute left-3 text-slate-500" />
              <Input
                type={"text"}
                placeholder={"Search links, tags, or domains..."}
                className={"pl-10"}
              />
            </div>
          </div>
          {/* options */}
          <div className="flex items-center gap-4">
            {/* notifications */}
            <button className="relative text-slate-400 hover:text-white transition-colors cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border border-navy-900"></span>
            </button>
            {/* profile */}
            <div className="h-8 w-px bg-white/10 mx-2"></div>
            <button className="flex items-center gap-2 hover:bg-white/5 py-1 px-2 rounded-lg transition-colors">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="User"
                className="w-8 h-8 rounded-full ring-2 ring-white/10"
                draggable={false}
              />
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-white leading-none">
                  Alex M.
                </p>
                <p className="text-xs text-slate-400 mt-1">Pro Plan</p>
              </div>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="mx-8 my-4">
          <Suspense fallback={<Loader />}>
            {CurrentViewComponent ? (
              <CurrentViewComponent info={viewData} />
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400">
                <p>View not available yet</p>
              </div>
            )}
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
