// dependencies
import { cn } from "../utils/ClassMerger";
// variant
const Variant = {
  h1: "text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6",
  h2: "text-3xl md:text-5xl font-bold text-white mb-6",
  h3: "text-3xl font-bold text-white mb-4",
};

// main
function Header({ variant, className, children, ...rest }) {
  return (
    <h1 className={cn(Variant[variant], className)} {...rest}>
      {children}
    </h1>
  );
}

export default Header;
