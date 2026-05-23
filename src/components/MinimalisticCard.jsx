// class merger
import { cn } from "../utils/ClassMerger";
// theme
const Theme = {
  blue: "bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]",
};

// main
function MinimalisticCard({ data, className, theme }) {
  return (
    <div className="group p-6 rounded-2xl bg-linear-to-b from-navy-800/50 to-navy-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
      <div className="relative z-10">
        <div
          className={cn(
            "w-2 h-2 rounded-full  mb-4 group-hover:scale-150 transition-transform",
            Theme[theme],
            className,
          )}
        ></div>
        <h3 className="text-white font-semibold mb-2">{data.title}</h3>
        <p className="text-sm text-slate-400">{data.desc}</p>
      </div>
    </div>
  );
}

export default MinimalisticCard;
