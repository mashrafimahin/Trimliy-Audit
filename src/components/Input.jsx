// utility
import { cn } from "../utils/ClassMerger";

// main
function Input({
  type,
  name,
  value,
  setValue,
  placeholder,
  className,
  ...rest
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => setValue(e)}
      placeholder={placeholder}
      className={cn(
        "w-full pl-12 h-14 bg-navy-900/50 text-lg border-transparent focus:bg-navy-900 rounded-md",
        className,
      )}
      {...rest}
    />
  );
}

export default Input;
