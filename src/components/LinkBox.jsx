// icons
import { Calendar, Globe2, QrCode } from "lucide-react";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// components
import ActionHandler from "./ActionsHandler";

// main
const LinkBox = ({ item }) => {
  return (
    <div className="p-3 sm:p-4 md:p-5 group border-gray-600/20 border-b hover:bg-white/5 transition-colors">
      <div className="flex items-start gap-3 sm:gap-4">
        {/* icon */}
        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 flex-none mt-1">
          <Globe2 className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
        </div>

        {/* content area */}
        <div className="min-w-0 flex-1">
          {/* Row 1: shortURL + clicks count */}
          <div className="flex items-center gap-2 mb-1">
            <Header
              variant={"h3"}
              className={
                "text-sm sm:text-base md:text-lg font-semibold truncate mb-0 hover:underline cursor-pointer flex-1 min-w-0"
              }
            >
              <a
                href={`${import.meta.env.VITE_API_LINK}/${item.shortURL}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.shortURL || "not found"}
              </a>
            </Header>

            {/* clicks count - inline with link */}
            <div className="text-center flex-shrink-0 whitespace-nowrap">
              <div className="text-sm sm:text-lg font-bold text-white">
                {item.clicks < 10 ? "0" + item.clicks : item.clicks || 0}
              </div>
              <div className="text-xs text-slate-500">Total Clicks</div>
            </div>
          </div>

          {/* Row 2: full URL */}
          <Paragraph variant={"small"} className="text-xs sm:text-sm truncate">
            {item.fullURL || "not found"}
          </Paragraph>

          {/* Row 3: date and QR info */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4 mt-2 text-xs text-slate-500">
            <span className="flex items-center gap-1 whitespace-nowrap">
              <Calendar className="w-3 h-3 flex-none" />{" "}
              {item.createdDate || "00-00-2000"}
            </span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <QrCode className="w-3 h-3 flex-none" /> QR Inactive
            </span>
          </div>

          {/* Row 4: action buttons - new line, column style */}
          <div className="mt-3 flex gap-2">
            <ActionHandler info={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkBox;
