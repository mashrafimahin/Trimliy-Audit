// dependencies
import { useState, useRef, useEffect } from "react";
// utils
import { cn } from "../utils/ClassMerger";
// icons
import {
  Calendar,
  Lock,
  Globe2,
  MoreHorizontal,
  QrCode,
  Edit,
  Trash2,
} from "lucide-react";
// components
import Button from "./Button";
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";

// main
const LinkBox = ({ item }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-5 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group">
      {/* left side */}
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
          <Globe2 className="w-5 h-5 text-blue-400" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <Header
              variant={"h3"}
              className={
                "text-lg font-semibold truncate mb-0 hover:underline cursor-pointer"
              }
            >
              {item.short}
            </Header>
            <div
              className={cn(
                "flex items-center p-1 px-3 rounded-full text-xs border",
                item.status === "Inactive"
                  ? "bg-slate-700 text-slate-200 border-slate-300"
                  : "bg-green-500/10 text-green-400 border-green-600",
              )}
            >
              <Lock className="w-3 h-3 mr-1" /> {item.status}
            </div>
          </div>
          <Paragraph variant={"small"}>{item.original}</Paragraph>
          <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {item.date}
            </span>
            <span className="flex items-center gap-1">
              <QrCode className="w-3 h-3" /> QR Inactive
            </span>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t border-white/5 md:border-t-0 pt-4 md:pt-0">
        <div className="text-center md:text-right">
          <div className="text-lg font-bold text-white">{item.clicks}</div>
          <div className="text-xs text-slate-500">Total Clicks</div>
        </div>
        <div className="flex gap-2">
          <Button variant={"regular"}>Copy</Button>
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
              className="p-2 px-4 bg-slate-900 rounded-md cursor-pointer border border-slate-600 active:scale-[0.95] transition"
            >
              <MoreHorizontal size={16} />
            </button>

            {/* Popup Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-50">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    // Add edit functionality here
                  }}
                  className="w-full px-4 py-2 flex items-center gap-2 hover:bg-slate-700 rounded-t-lg transition text-sm text-slate-200"
                >
                  <Edit size={16} /> Edit
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    // Add delete functionality here
                  }}
                  className="w-full px-4 py-2 flex items-center gap-2 hover:bg-slate-700 rounded-b-lg transition text-sm text-red-400"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkBox;
