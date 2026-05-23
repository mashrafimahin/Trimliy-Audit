// icons
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  Zap,
  Briefcase,
  PhoneCall,
  MessageCircle,
  Code,
  Building,
} from "lucide-react";

// data
export const info = {
  title: ["Let's Connect With", " Trimly"],
  description:
    "Whether you need technical support, have business inquiries, want to report an issue, or simply want to say hello, our team is always here to help.",
  supportTeams: {
    title: "Dedicated Support Teams",
    para: "Choose the right department to ensure your request is handled by our specialized experts.",
    cards: [
      {
        icon: Zap,
        title: "Technical Support",
        desc: "Get help with integrations and technical issues.",
      },
      {
        icon: Briefcase,
        title: "Sales Inquiry",
        desc: "Discuss plans, pricing, and custom solutions.",
      },
      {
        icon: PhoneCall,
        title: "Partnerships",
        desc: "Explore collaboration and affiliate opportunities.",
      },
      {
        icon: MessageCircle,
        title: "Feedback",
        desc: "Share suggestions to help us improve Trimly.",
      },
      {
        icon: Code,
        title: "API Support",
        desc: "Assistance with REST API and webhooks.",
      },
      {
        icon: Building,
        title: "Enterprise",
        desc: "Priority assistance for enterprise customers.",
      },
    ],
  },
  address: {
    company: "Trimly Inc.",
    location: ["123 Innovation Drive", "San Francisco, CA 94105"],
  },
  FAQ: [
    {
      id: "essential",
      title: "How quickly does Trimly respond?",
      desc: "Our standard response time is under 2 hours during normal business hours. Enterprise customers have access to an exclusive 24/7 priority line with response times under 15 minutes.",
    },
    {
      id: "",
      title: "How can I report a broken link?",
      desc: "You can report malicious or broken links directly from our Support Center dashboard, or by selecting 'Technical Support' in the contact form above.",
    },
    {
      id: "",
      title: "Do you provide enterprise support?",
      desc: "Yes, our Enterprise plans include dedicated account managers, custom SLAs, and priority 24/7 phone and email support.",
    },
    {
      id: "",
      title: "Can I contact support directly?",
      desc: "Absolutely. Logged-in users can use the live chat widget in their dashboard for immediate assistance during business hours.",
    },
    {
      id: "",
      title: "Where can I access API documentation?",
      desc: "Our extensive developer documentation and API references can be found at docs.trimly.com or by clicking 'API Docs' in our footer.",
    },
  ],
  social: [
    { icon: faFacebook, label: "Facebook", link: "#" },
    { icon: faLinkedinIn, label: "LinkedIn", link: "#" },
    { icon: faGithub, label: "Instagram", link: "#" },
  ],
};
