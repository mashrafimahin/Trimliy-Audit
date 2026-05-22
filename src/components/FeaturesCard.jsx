// class merger
import { cn } from "../utils/ClassMerger";

// main
function FeaturesCard({ data, theme }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
        <data.icon className={cn("w-6 h-6", theme)} />
      </div>
      <div>
        <h4 className="text-white font-bold mb-2 text-lg">{data.title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{data.desc}</p>
      </div>
    </div>
  );
}

export default FeaturesCard;
