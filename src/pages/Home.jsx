// dependencies
import { useEffect } from "react";
// layouts
import Hero from "../layout/Hero.layout";
import Status from "../layout/Status.layout";
import Features from "../layout/Features.layout";
import Pricing from "../layout/Pricing.layout";
import Footer from "../layout/Footer.layout";
// components
import Navbar from "../components/Navbar";

// main
function Home() {
  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Status />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
