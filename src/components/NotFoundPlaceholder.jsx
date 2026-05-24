// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// icons
import { Lock } from "lucide-react";

// main
const NotFoundPlaceholder = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center text-center min-h-100">
      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
        <Lock className="w-8 h-8 text-blue-400" />
      </div>
      <Header variant={"h3"}>Coming Soon</Header>
      <Paragraph variant={"small"} className={"max-w-100"}>
        This settings panel is currently under construction and will be
        available in the next update.
      </Paragraph>
    </div>
  );
};

export default NotFoundPlaceholder;
