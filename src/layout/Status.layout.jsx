// main
function Status() {
  return (
    <section className="py-20 border-y border-white/5 bg-navy-950/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Links Generated", value: "4k+" },
            { label: "Clicks Tracked", value: "15k+" },
            { label: "Active Users", value: "2K+" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Status;
