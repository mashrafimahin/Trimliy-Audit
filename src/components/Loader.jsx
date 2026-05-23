const Loader = () => {
  // calculation
  const spinnerBars = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    delay: (i + 1) * 0.1,
    rotation: (i + 1) * 36,
  }));

  return (
    <>
      <style>{`
        @keyframes spinner-animation {
          0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
            transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
          }
          50% {
            transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
          }
        }
      `}</style>

      <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gray-850">
        <div className="relative w-2.25 h-2.25">
          {spinnerBars.map((bar) => (
            <div
              key={bar.id}
              className="absolute w-1/2 h-[150%] bg-white"
              style={{
                "--delay": bar.delay,
                "--rotation": bar.rotation,
                "--translation": 150,
                animation: `spinner-animation 1s calc(var(--delay) * 1s) infinite ease`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Loader;
