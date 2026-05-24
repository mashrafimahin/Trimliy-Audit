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
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "My Links", path: "/dashboard/links", icon: LinkIcon },
  { name: "Analytics", path: "/dashboard/analytics", icon: BarChart2 },
  { name: "QR Codes", path: "/dashboard/qr", icon: QrCode },
  { name: "Teams", path: "/dashboard/teams", icon: Users },
  { name: "Billing", path: "/dashboard/billing", icon: CreditCard },
  { name: "Profile", path: "/dashboard/profile", icon: User },
];
