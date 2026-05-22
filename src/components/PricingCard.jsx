// icons
import { CheckCircle2 } from "lucide-react";
// component
import Button from "./Button";

// main
function PricingCard({ data }) {
  return (
    <div className="flex flex-col relative transform md:-translate-y-4 border-blue-500/30 shadow-[0_0_40px_rgba(37,99,235,0.15)] p-8 rounded-xl">
      {data.special && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          {data.special}
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{data.plan}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${data.cost}</span>{" "}
        <span className="text-slate-400">/{data.duration}</span>
      </div>
      <ul className="space-y-4 mb-8 flex-1">
        {data.features.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-300">
            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button variant={!data.special && "regular"}>{data.action}</Button>
    </div>
  );
}

export default PricingCard;
