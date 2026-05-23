// dependencies
import { useState } from "react";
// icon
import { ChevronDown } from "lucide-react";

// main
function FAQ({ data }) {
  // state
  const [openCookie, setOpenCookie] = useState("essential");

  // handle toggle
  const toggleCookie = (id) => {
    setOpenCookie(openCookie === id ? null : id);
  };
  return (
    <div
      key={data.id}
      className="border border-white/10 rounded-2xl bg-navy-900/30 overflow-hidden"
    >
      <button
        onClick={() => toggleCookie(data.id)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-semibold text-white text-lg">{data.title}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openCookie === data.id ? "rotate-180" : ""}`}
        />
      </button>
      <div>
        {openCookie === data.id && (
          <div>
            <div className="px-6 pb-6 text-slate-400 border-t border-white/5 mt-2 pt-4">
              {data.desc}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;
