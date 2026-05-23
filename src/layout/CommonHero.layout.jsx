// dependencies
import { useNavigate } from "react-router";
// icons
import { Sparkles } from "lucide-react";
// components
import Button from "../components/Button";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";

// main
function CommonHero({
  sectionTag,
  headerTitle,
  headerDescription,
  buttonOne,
  buttonOneLink,
  buttonTwo,
  buttonTwoLink,
  extendedImage,
  extendedImageSource,
}) {
  // navigate config
  const navigate = useNavigate();

  // handle navigate
  const handleClick = (route) => {
    navigate(`/${route}`);
  };

  return (
    <section className="pt-20 pb-20 px-6 relative overflow-hidden">
      {/* gradient decoration */}
      <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />

      {/* hero */}
      <div className="container mx-auto max-w-6xl text-center z-10 relative">
        <div>
          {sectionTag && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              {sectionTag}
            </div>
          )}
          <Header variant={"h2"}>
            {headerTitle[0]} <br className="hidden md:block" />
            <span className="gradient-text">{headerTitle[1]}</span>
          </Header>
          <Paragraph variant={"large"}>{headerDescription}</Paragraph>
          {/* actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttonOne && (
              <Button onClick={() => handleClick(buttonOneLink)}>
                {buttonOne}
              </Button>
            )}
            {buttonTwo && (
              <Button
                variant={"regular"}
                onClick={() => handleClick(buttonTwoLink)}
              >
                {buttonTwo}
              </Button>
            )}
          </div>
        </div>

        {extendedImage && (
          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-linear-to-t from-navy-900 via-transparent to-transparent z-10"></div>
            <div className="rounded-2xl border border-white/10 bg-navy-900/80 p-2 shadow-2xl backdrop-blur-xl relative overflow-hidden ring-1 ring-white/5">
              <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
              <img
                src={extendedImageSource}
                alt={extendedImageSource}
                className="w-full h-auto rounded-xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover max-h-100"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CommonHero;
