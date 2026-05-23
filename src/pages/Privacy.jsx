// dependencies
import { useEffect } from "react";
// layouts
import PrivacyLayout from "../layout/Privacy.layout";
import Footer from "../layout/Footer.layout";
// component
import Navbar from "../components/Navbar";

// main
function Login() {
  // on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <PrivacyLayout />
      <Footer />
    </>
  );
}

export default Login;
