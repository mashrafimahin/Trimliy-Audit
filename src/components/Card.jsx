function Card({ data }) {
  return (
    <div className="group hover:-translate-y-1 transition-all duration-300 border border-gray-100/20 p-6 rounded-xl cursor-pointer">
      {data.icon && (
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <data.icon className="w-6 h-6 text-blue-400" />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-3">{data.title}</h3>
      <p className="text-slate-400 leading-relaxed">{data.desc}</p>
    </div>
  );
}

export default Card;
