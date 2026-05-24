// dependencies
import { Suspense, useState } from "react";
// utility
import { cn } from "../utils/ClassMerger";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// components
import NotFoundPlaceholder from "../components/NotFoundPlaceholder";
import ProfileActionCard from "../components/ProfileActionCard";
// icons
import { User, Lock, Bell, Palette } from "lucide-react";
// data
const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: Lock },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "notifications", label: "Notifications", icon: Bell },
];
// paths
const COMPONENT_PATH = {
  profile: ProfileActionCard,
  security: null,
  appearance: null,
  notifications: null,
};

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const SelectedComponent = COMPONENT_PATH[activeTab];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* header */}
      <div>
        <Header variant={"h3"} className={"mb-1"}>
          Settings
        </Header>
        <Paragraph variant={"small"}>
          Manage your account preferences and settings.
        </Paragraph>
      </div>
      {/* settings */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* navigation */}
        <div className="w-full md:w-64 p-2 flex flex-row md:flex-col gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors whitespace-nowrap md:whitespace-normal",
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]" // Fixed: "text-whit" → "text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5",
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
        {/* options */}
        <div className="flex-1 w-full">
          <Suspense fallback={<div className="text-slate-400">Loading...</div>}>
            {SelectedComponent ? (
              <SelectedComponent />
            ) : (
              <NotFoundPlaceholder />
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Profile;
