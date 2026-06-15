// icon
import { Target } from "lucide-react";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// layouts
import CTA from "./CTA.layout";
// components
import ProfileCard from "../components/ProfileCard";
import CommonHero from "../layout/CommonHero.layout";
import FeaturesCard from "../components/FeaturesCard";
// data
import { info as data } from "../static/About.info";

// main
function AboutLayout() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <CommonHero
        sectionTag={data.hero.tag}
        headerTitle={data.hero.title}
        headerDescription={data.hero.description}
        buttonOne={data.hero.buttonOne}
        buttonOneLink={data.hero.buttonOneLink}
        buttonTwo={data.hero.buttonTwo}
        buttonTwoLink={data.hero.buttonTwoLink}
        extendedImage={data.hero.extendedImage}
        extendedImageSource={data.hero.extendedImageSource}
      />

      {/* Company Introduction Section */}
      <section className="py-24 relative z-10 bg-navy-950/50 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-tr from-blue-600/20 to-purple-600/20 blur-2xl rounded-full"></div>
              <img
                src={data.company.image}
                alt={data.company.imageTag}
                className="relative rounded-2xl border border-white/10 shadow-2xl"
                draggable={false}
              />
            </div>
            {/* description */}
            <div>
              <Header variant={"h3"}>{data.company.title}</Header>
              <Paragraph variant={"small"}>
                {data.company.description}
              </Paragraph>

              <div className="grid min-[484px]:grid-cols-2 gap-y-4 gap-x-8">
                {data.company.cards.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-slate-200 font-medium">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-navy-900 rounded-3xl p-10 md:p-16 backdrop-blur-xl">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <Header variant={"h2"}>{data.mission.title}</Header>
              <Paragraph variant={"small"}>
                {data.mission.description}
              </Paragraph>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Trimly Grid */}
      <section className="py-24 bg-navy-950/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <Header variant={"h3"}>{data.choose.title}</Header>
            <Paragraph variant={"small"}>{data.choose.description}</Paragraph>
          </div>

          <div className="grid min-[570px]:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.choose.cards.map((feature, i) => (
              <FeaturesCard key={i} data={feature} theme={"text-blue-400"} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center glass-card p-8 group hover:bg-white/5 transition-colors"
              >
                <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </h3>
                <p className="text-slate-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <Header variant={"h3"}>Meet the Team</Header>
            <Paragraph variant={"small"}>
              The passionate builders behind Trimly's smart infrastructure.
            </Paragraph>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.members.map((info, i) => (
              <ProfileCard key={i} data={info} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow / Core Values Section */}
      <section className="py-24 bg-navy-950/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <Header variant={"h3"}>Our Core Values</Header>
            <Paragraph variant={"small"}>
              The principles that drive every feature we build.
            </Paragraph>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.coreValue.map((value, i) => (
              <FeaturesCard key={i} data={value} theme={"text-purple-400"} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title={"Start Managing Links Smarter Today"}
        description={
          "Join thousands of creators and businesses who use Trimly to optimize their digital presence."
        }
        buttonOne={"Get Started Free"}
        buttonOneLink={"signup"}
      />
    </div>
  );
}

export default AboutLayout;
