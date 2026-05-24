// dependencies
import { Link } from "react-router";
// icons
import { Link as LinkIcon } from "lucide-react";
//  utility tools
import { cn } from "../utils/ClassMerger";
// data
import { sideNavInfo as data } from "../static/Navigation.info";

// View key mapping
const PATH_TO_VIEW_KEY = {
  "/dashboard": "overview",
  "/dashboard/links": "links",
  "/dashboard/analytics": "analytics",
  "/dashboard/qr": "qr",
  "/dashboard/teams": "teams",
  "/dashboard/billing": "billing",
  "/dashboard/profile": "profile",
};

// main
const Sidebar = ({ isMobileMenuOpen, activeView, onViewChange }) => {
  // Handle navigation item click
  const handleNavClick = (path) => {
    const viewKey = PATH_TO_VIEW_KEY[path];
    if (viewKey) {
      onViewChange(viewKey);
    }
  };

  return (
    <div className="flex h-screen bg-navy-900 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 flex flex-col w-64 bg-navy-950 border-r border-white/5 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:w-64",
        )}
      >
        {/* logo */}
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <Link to="/" className="flex items-center gap-2 overflow-hidden">
            <div className="w-8 h-8 shrink-0 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <LinkIcon className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
              Trimly
            </span>
          </Link>
        </div>

        {/* navigation items */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {data.map((item) => {
            const viewKey = PATH_TO_VIEW_KEY[item.path];
            const isActive = activeView === viewKey;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group cursor-pointer",
                  isActive
                    ? "bg-blue-600/10 text-blue-400"
                    : "text-slate-400 hover:text-white hover:bg-white/5",
                )}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5 shrink-0",
                    isActive
                      ? "text-blue-400"
                      : "text-slate-500 group-hover:text-slate-300",
                  )}
                />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
