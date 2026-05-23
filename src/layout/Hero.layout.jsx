// icons
import { Link2, ArrowRight } from "lucide-react";
// components
import Input from "../components/Input";
import Button from "../components/Button";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";

// main
function Hero() {
  return (
    <section className="pt-20 pb-20 px-6 relative">
      <div className="container mx-auto max-w-6xl text-center z-10 relative">
        {/* heading */}
        <div>
          <Header variant={"h1"}>
            Shorten, Track & <br className="hidden md:block" />
            <span className="gradient-text">Manage Links Smarter</span>
          </Header>
          <Paragraph variant={"large"}>
            The premium URL shortener for modern teams. Build branded links,
            track real-time analytics, and optimize your conversion rates all in
            one powerful platform.
          </Paragraph>
        </div>

        {/* inputs */}
        <div className="max-w-3xl mx-auto relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-card p-2 md:p-3 flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input placeholder={"Paste your long URL here..."} />
            </div>
            <Button>
              Shorten URL <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Abstract Dashboard Preview */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-navy-900/80 p-2 shadow-2xl backdrop-blur-xl relative overflow-hidden ring-1 ring-white/5">
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
              alt="Dashboard Preview"
              loading="lazy"
              className="w-full h-auto rounded-xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
