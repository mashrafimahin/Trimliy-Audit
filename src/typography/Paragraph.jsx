// dependencies
import { cn } from "../utils/ClassMerger";
// variant
const Variant = {
  large:
    "text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed",
  small: "text-slate-300 mb-6 text-md",
};

// main
function Paragraph({ variant, className, children, ...rest }) {
  return (
    <p className={cn(Variant[variant], className)} {...rest}>
      {children}
    </p>
  );
}

export default Paragraph;
