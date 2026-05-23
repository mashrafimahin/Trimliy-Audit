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
        "w-full pl-4 h-14 bg-navy-900/50 text-md border border-gray-100/16 focus:bg-navy-900 rounded-md",
        className,
      )}
      {...rest}
    />
  );
}

export default Input;
