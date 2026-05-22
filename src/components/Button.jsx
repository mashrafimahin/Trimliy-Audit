function Button({ variant, children, ...rest }) {
  return (
    <>
      {variant === "regular" ? (
        <button
          className="w-full md:w-auto px-8 py-2 shrink-0 flex items-center justify-center bg-gray-900 border border-gray-600 rounded-md cursor-pointer active:scale-[0.96] transition"
          {...rest}
        >
          {children}
        </button>
      ) : (
        <button
          className="w-full md:w-auto px-8 py-2 shrink-0 flex items-center justify-center bg-blue-600 rounded-md cursor-pointer active:scale-[0.96] transition"
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
