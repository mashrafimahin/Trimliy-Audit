// dependencies
// icons
import { Link2 } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 py-12 md:py-16 mt-20 relative z-10">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <Link2 className="text-blue-500 w-6 h-6" />
          <span className="text-xl font-bold text-white">Trimly</span>

          <p className="text-slate-400 text-sm mb-6 max-w-sm">
            The modern link management platform for forward-thinking teams.
            Shorten, track, and optimize every touchdowns.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Link Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                QR Codes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Link-in-bio
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Resources</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                API
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
