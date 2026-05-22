// main
function Paragraph({ children, ...rest }) {
  return (
    <p
      className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
      {...rest}
    >
      {children}
    </p>
  );
}

export default Paragraph;
