function Input({ placeholder, ...rest }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full pl-12 h-14 bg-navy-900/50 text-lg border-transparent focus:bg-navy-900 rounded-md"
      {...rest}
    />
  );
}

export default Input;
