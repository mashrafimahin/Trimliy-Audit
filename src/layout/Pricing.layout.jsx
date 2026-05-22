// dependencies
// components
import PricingCard from "../components/PricingCard";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";

// dummy data
const data = [
  {
    plan: "Hobby",
    cost: 0,
    duration: "month",
    features: [
      "50 links/month",
      "Basic analytics",
      "Standard support",
      "7-day link history",
    ],
    action: "Get Started",
  },
  {
    special: "Most Popular",
    plan: "Pro",
    cost: 15,
    duration: "month",
    features: [
      "1,000 links/month",
      "Advanced analytics",
      "Custom domains",
      "Dynamic QR codes",
      "1-year link history",
    ],
    action: "Start 7-day Trial",
  },
  {
    plan: "Business",
    cost: 49,
    duration: "month",
    features: [
      "Unlimited links",
      "Custom API access",
      "SSO & Advanced Security",
      "Team collaboration",
      "Dedicated success manager",
    ],
    action: "Contact Sales",
  },
];

// main
function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-navy-950">
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Header variant={"regular"}>Simple, transparent pricing</Header>
          <Paragraph>
            Start for free, upgrade when you need more power.
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.map((items, index) => (
            <PricingCard data={items} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
