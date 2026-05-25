// dependencies
import { useSlices } from "../hooks/useSlices";
import { handlePopupView } from "../app/features/FlowControlSlice";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// components
import Button from "../components/Button";
import LinkBox from "../components/LinkBox";
// icons
import { Plus } from "lucide-react";

const Links = () => {
  // state
  const { data } = useSlices("linksData");
  const { dispatch } = useSlices("flowControl");

  // handle popup control
  const handlePopup = () => {
    dispatch(handlePopupView());
  };

  return (
    <div className="space-y-6">
      {/* header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Header variant={"h3"}>My Links</Header>
          <Paragraph variant={"small"} className={"text-sm -mt-2.5"}>
            Manage, edit, and track your shortened URLs.
          </Paragraph>
        </div>
        <Button onClick={handlePopup}>
          <Plus className="w-5 h-5 mr-2" /> Create New
        </Button>
      </div>

      {/* link lists */}
      <div className="space-y-4">
        {data.links.map((item, i) => (
          <LinkBox key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Links;
