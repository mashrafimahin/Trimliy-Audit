// dependencies
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// main
export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // Check if a target section ID was passed in the state
    const targetId = location.state?.scrollToSection;

    if (targetId) {
      // Wait a tiny moment for the new page layout to load
      requestAnimationFrame(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    } else {
      // If no section is targeted, go to the top of the new page
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
