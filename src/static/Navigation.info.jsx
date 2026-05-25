// icons
import {
  LayoutDashboard,
  Link as LinkIcon,
  BarChart2,
  QrCode,
  Users,
  CreditCard,
  User,
} from "lucide-react";

// data - global
export const info = [
  {
    caption: "Features",
    route: "features",
    isExternal: false,
  },
  {
    caption: "About",
    route: "about",
    isExternal: true,
  },
  {
    caption: "Pricing",
    route: "pricing",
    isExternal: false,
  },
  {
    caption: "Docs",
    route: "documentation",
    isExternal: true,
  },
  {
    caption: "Contact",
    route: "contact",
    isExternal: true,
  },
];

// data - dashboard
export const sideNavInfo = [
  { name: "Dashboard", path: "dashboard", icon: LayoutDashboard },
  { name: "My Links", path: "links", icon: LinkIcon },
  { name: "Analytics", path: "analytics", icon: BarChart2 },
  { name: "QR Codes", path: "qr", icon: QrCode },
  { name: "Teams", path: "teams", icon: Users },
  { name: "Billing", path: "billing", icon: CreditCard },
  { name: "Profile", path: "profile", icon: User },
];
