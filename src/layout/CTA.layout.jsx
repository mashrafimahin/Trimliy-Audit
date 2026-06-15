// dependencies
import { useNavigate } from "react-router";
// component
import Button from "../components/Button";

function CTA({
  title,
  description,
  buttonOne,
  buttonOneLink,
  buttonTwo,
  buttonTwoLink,
}) {
  // navigate
  const navigate = useNavigate();

  // handle click
  const handleClick = (route) => {
    navigate(`/${route}`);
  };

  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5 bg-navy-950/50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="relative z-10">
          <div className="w-20 h-20 mx-auto bg-linear-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative">
            {title}
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto relative">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            {buttonOne && (
              <Button
                className="w-auto px-10"
                onClick={() => handleClick(buttonOneLink)}
              >
                {buttonOne}
              </Button>
            )}
            {buttonTwo && (
              <Button
                className="w-auto px-10"
                onClick={() => handleClick(buttonTwoLink)}
              >
                {buttonTwo}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
