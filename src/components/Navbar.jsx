// dependencies
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// icons
import { Link2 } from "lucide-react";
// components
import Button from "./Button";
// data
import { info as menu } from "../static/Navigation.info";

// main
function Navbar() {
  // navigation
  const navigate = useNavigate();

  // handle navigation
  const handleClick = (route) => {
    navigate(`/${route}`);
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* header logo */}
        <Link to="/">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all">
              <Link2 className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Trimly
            </span>
          </div>
        </Link>

        {/* navigation */}
        <nav>
          <ul className="hidden md:flex items-center gap-8">
            {menu.map((item, i) => (
              <li
                key={i}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {item.isExternal ? (
                  <Link to={`/${item.route}`}>{item.caption}</Link>
                ) : (
                  <Link to={`/`} state={{ scrollToSection: item.route }}>
                    {item.caption}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* actions */}
        <div className="flex items-center gap-4">
          <Button variant={"regular"} onClick={() => handleClick("login")}>
            Log In
          </Button>
          <Button onClick={() => handleClick("signup")}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
