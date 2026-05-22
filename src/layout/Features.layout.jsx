// dependencies
// icons
import { BarChart3, Link2, QrCode, Lock, Globe2, Users } from "lucide-react";
// components
import Card from "../components/Card";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";

// main
function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Header variant={"regular"}>
            Everything you need to <br />
            <span className="gradient-text">master your links</span>
          </Header>
          <Paragraph>
            Powerful features built modern marketing teams, creators, and
            developers.
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BarChart3,
              title: "Advanced Analytics",
              desc: "Track clicks, geographic data, and device types in real-time.",
            },
            {
              icon: Link2,
              title: "Custom Branded Domains",
              desc: "Use your own domain name to build trust and brand recognition.",
            },
            {
              icon: QrCode,
              title: "Dynamic QR Codes",
              desc: "Generate high-quality, customizable QR codes for any link.",
            },
            {
              icon: Lock,
              title: "Password Protection",
              desc: "Secure sensitive links with passwords and expiration dates.",
            },
            {
              icon: Globe2,
              title: "Geo-Targeting",
              desc: "Route users to different destinations based on their location.",
            },
            {
              icon: Users,
              title: "Team Collaboration",
              desc: "Invite your team and manage links together in workspaces.",
            },
          ].map((feature, i) => (
            <Card key={i} data={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
