// dependencies
import { useEffect } from "react";
// layout
import AboutLayout from "../layout/About.layout";
import Footer from "../layout/Footer.layout";
// components
import Navbar from "../components/Navbar";

// main
function About() {
  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <AboutLayout />
      <Footer />
    </>
  );
}

export default About;
