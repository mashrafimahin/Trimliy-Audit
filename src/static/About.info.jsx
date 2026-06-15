// images
import FounderPicture from "../assets/images/founder.png";
// icons
import {
  Activity,
  BarChart3,
  CheckCircle2,
  Heart,
  LayoutDashboard,
  QrCode,
  RefreshCw,
  Shield,
  Sparkle,
  Users,
  Zap,
} from "lucide-react";

// data
export const info = {
  hero: {
    tag: "our Story",
    title: ["Building Smarter Links for", "the Modern Web"],
    description:
      "Trimliy is a modern URL shortening and analytics platform designed to help creators, developers, businesses, and teams create smart links, track engagement, and manage digital sharing more efficiently.",
    buttonOne: "Get Started",
    buttonOneLink: "signup",
    buttonTwo: "Explore Now",
    buttonTwoLink: "dashboard",
    extendedImage: true,
    extendedImageSource:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
  },
  company: {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    imageTag: "Trimliy Workspace",
    title: "Who We Are",
    description:
      "Trimly is more than just a URL shortener. It is a complete smart-link management platform built to help users simplify sharing, monitor traffic performance, and improve digital engagement through modern analytics and intelligent tools.",
    cards: [
      { icon: BarChart3, label: "Smart Analytics" },
      { icon: Zap, label: "Fast Redirection" },
      { icon: Shield, label: "Secure Links" },
      {
        icon: QrCode,
        label: "QR Code Integration",
      },
      {
        icon: Activity,
        label: "Real-Time Insights",
      },
      { icon: LayoutDashboard, label: "Modern UX" },
    ],
  },
  mission: {
    title: "Our Mission",
    description:
      "Trimliy aims to make link sharing smarter, cleaner, faster, and more insightful for modern internet users. We're building powerful tools with clean UX to simplify digital communication and make analytics accessible to everyone.",
  },
  choose: {
    title: "Why Choose Trimliy",
    description:
      "Everything you need to manage your digital footprint with confidence.",
    cards: [
      {
        icon: Zap,
        title: "Lightning Fast",
        desc: "Global edge network for instant redirects",
      },
      {
        icon: BarChart3,
        title: "Advanced Analytics",
        desc: "Deep insights into your audience",
      },
      {
        icon: Shield,
        title: "Secure Infrastructure",
        desc: "Enterprise-grade link protection",
      },
      {
        icon: QrCode,
        title: "QR Management",
        desc: "Dynamic codes for the real world",
      },
      {
        icon: Activity,
        title: "Real-Time Monitoring",
        desc: "Watch your clicks happen live",
      },
      {
        icon: Heart,
        title: "User-Friendly",
        desc: "Built for humans, not just machines",
      },
    ],
  },
  stats: [
    { label: "Links Generated", value: "4k+" },
    { label: "Clicks Tracked", value: "15k+" },
    { label: "Active Users", value: "2K+" },
    { label: "Uptime", value: "99.9%" },
  ],
  members: [
    {
      name: "Mashrafi Mahin",
      role: "CEO & Founder",
      bio: "Full-stack Software Engineer with expertise on MERN and relevant technologies.",
      img: FounderPicture,
      socialLinks: {
        fb: "https://facebook.com/mash.en6",
        in: "https://linkedin.com/in/mashrafidevs",
        github: "https://github.com/mashrafimahin",
      },
    },
  ],
  coreValue: [
    {
      icon: Sparkle,
      title: "Innovation",
      desc: "Constantly pushing the boundaries of what link management can do.",
    },
    {
      icon: Shield,
      title: "Transparency",
      desc: "Clear analytics, honest pricing, and transparent data practices.",
    },
    {
      icon: CheckCircle2,
      title: "Reliability",
      desc: "Building robust systems that you can depend on 24/7/365.",
    },
    {
      icon: Zap,
      title: "Simplicity",
      desc: "Making complex data easily understandable for everyone.",
    },
    {
      icon: Users,
      title: "User-Centered",
      desc: "Every decision starts and ends with our users needs.",
    },
    {
      icon: RefreshCw,
      title: "Improvement",
      desc: "Iterating rapidly based on feedback and modern standards.",
    },
  ],
};
