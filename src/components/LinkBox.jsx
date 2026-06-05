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
    <div className="p-5 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group border-gray-600/20 border-b">
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
              <a
                //! Need to Change Link
                href={`http://localhost:8380/${item.shortURL}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.shortURL || "not found"}
              </a>
            </Header>
          </div>
          <Paragraph variant={"small"}>{item.fullURL || "not found"}</Paragraph>
          <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />{" "}
              {item.createdDate || "00-00-2000"}
            </span>
            <span className="flex items-center gap-1">
              <QrCode className="w-3 h-3" /> QR Inactive
            </span>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t border-white/5 md:border-t-0 pt-4 md:pt-0">
        {/* clicks count */}
        <div className="text-center md:text-right">
          <div className="text-lg font-bold text-white">
            {item.clicks < 10 ? "0" + item.clicks : item.clicks || 0}
          </div>
          <div className="text-xs text-slate-500">Total Clicks</div>
        </div>
        {/* action buttons */}
        <div className="flex gap-2">
          <ActionHandler info={item} />
        </div>
      </div>
    </div>
  );
};

export default LinkBox;
