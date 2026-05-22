// dependencies
// components
import PricingCard from "../components/PricingCard";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// data
import { info as data } from "../static/Pricing.info";

// main
function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-navy-950">
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Header variant={"regular"}>{data.title}</Header>
          <Paragraph>{data.description}</Paragraph>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.cards.map((items, index) => (
            <PricingCard data={items} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
