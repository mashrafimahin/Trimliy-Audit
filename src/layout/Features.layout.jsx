// components
import Card from "../components/Card";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// data
import { features as data } from "../static/Features.info";

// main
function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Header variant={"h2"}>
            {data.title} <br />
            <span className="gradient-text">{data.subTitle}</span>
          </Header>
          <Paragraph variant={"large"}>{data.description}</Paragraph>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.cards.map((feature, i) => (
            <Card key={i} data={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
