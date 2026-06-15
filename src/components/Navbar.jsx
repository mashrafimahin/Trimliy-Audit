// dependencies
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// icons
import { useState } from "react";
import { Link2, Menu, X } from "lucide-react";
// components
import Button from "./Button";
// data
import { info as menu } from "../static/Navigation.info";

// main
function Navbar() {
  // navigation
  const navigate = useNavigate();
  // state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // handle navigation
  const handleClick = (route) => {
    navigate(`/${route}`);
  };

  // handle click
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 px-2 lg:px-10 backdrop-blur-md bg-white/5 border-b border-white/5">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all">
              <Link2 className="text-white w-5 h-5" />
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white hidden sm:inline">
              Trimliy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {menu.map((item, i) => (
                <li
                  key={i}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <Link
                    to={item.isExternal ? `/${item.route}` : "/"}
                    state={{ scrollToSection: item.route }}
                  >
                    {item.caption}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant={"regular"} onClick={() => handleClick("login")}>
              Log In
            </Button>
            <Button onClick={() => handleClick("signup")}>Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-55 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-slate-950 border-l border-white/10 z-55 md:hidden transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="text-lg font-bold text-white">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="p-2">
            <X size={24} className="text-slate-300" />
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-1">
            {menu.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.isExternal ? `/${item.route}` : "/"}
                  state={{ scrollToSection: item.route }}
                  onClick={handleNavClick}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.caption}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-2 border-t border-white/10 pt-6">
            <Button
              variant={"regular"}
              onClick={() => {
                handleClick("login");
                handleNavClick();
              }}
            >
              Log In
            </Button>
            <Button
              onClick={() => {
                handleClick("signup");
                handleNavClick();
              }}
            >
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
