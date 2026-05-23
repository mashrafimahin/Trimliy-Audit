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
      "Trimly is a modern URL shortening and analytics platform designed to help creators, developers, businesses, and teams create smart links, track engagement, and manage digital sharing more efficiently.",
    buttonOne: "Get Started",
    buttonOneLink: "signup",
    buttonTwo: "Explore Now",
    buttonTwoLink: "about",
    extendedImage: true,
    extendedImageSource:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
  },
  company: {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    imageTag: "Trimly Workspace",
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
      "Trimly aims to make link sharing smarter, cleaner, faster, and more insightful for modern internet users. We're building powerful tools with clean UX to simplify digital communication and make analytics accessible to everyone.",
  },
  choose: {
    title: "Why Choose Trimly",
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
    { label: "Links Generated", value: "100k+" },
    { label: "Clicks Tracked", value: "750k+" },
    { label: "Active Users", value: "10K+" },
    { label: "Uptime", value: "99.9%" },
  ],
  members: [
    {
      name: "Sarah Jenkins",
      role: "CEO & Founder",
      bio: "Former product lead at major tech firms. Passionate about building tools that simplify complex workflows.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      socialLinks: {
        fb: "#",
        in: "#",
        github: "#",
      },
    },
    {
      name: "David Chen",
      role: "Head of Engineering",
      bio: "Distributed systems expert. Obsessed with making Trimly the fastest link shortener on the planet.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      socialLinks: {
        fb: "#",
        in: "#",
        github: "#",
      },
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Designer",
      bio: "Award-winning UI/UX designer focused on creating intuitive, satisfying digital experiences.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      socialLinks: {
        fb: "#",
        in: "#",
        github: "#",
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
