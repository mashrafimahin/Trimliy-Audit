// dependencies
import { useEffect } from "react";
// layout
import ContactLayout from "../layout/Contact.layout";
import Footer from "../layout/Footer.layout";
// components
import Navbar from "../components/Navbar";

// main
function Contact() {
  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <ContactLayout />
      <Footer />
    </>
  );
}

export default Contact;
