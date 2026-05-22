// main
function Header({ variant, children, ...rest }) {
  return (
    <>
      {variant === "regular" ? (
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-6"
          {...rest}
        >
          {children}
        </h2>
      ) : (
        <h1
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          {...rest}
        >
          {children}
        </h1>
      )}
    </>
  );
}

export default Header;
