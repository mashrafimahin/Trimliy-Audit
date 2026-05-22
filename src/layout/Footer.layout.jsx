// dependencies
import { Link } from "react-router";
// icons
import { Link2 } from "lucide-react";
// data
import { info as data } from "../static/Features.info";

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 py-12 md:py-16 relative z-10">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* logo */}
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-2">
            <Link2 className="text-blue-500 w-6 h-6" />
            <span className="text-2xl font-bold text-white">Trimly</span>
          </div>
          <p className="text-slate-400 text-sm mb-6 max-w-sm">
            {data.logo.bio}
          </p>
        </div>
        {/* quick links */}
        {data.quickLinks.map((item, index) => (
          <div key={index}>
            <h4 className="text-white font-medium mb-4">{item.caption}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {item.links.map((elm) => (
                <li
                  key={elm.itemName}
                  className="hover:text-white hover:underline transition-colors cursor-pointer"
                >
                  <Link to={`/${elm.route}`}>{elm.itemName}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
