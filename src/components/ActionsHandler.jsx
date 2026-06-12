// dependencies
import { useState } from "react";
import { useSlices } from "../hooks/useSlices";
// controller
import { handleTarget } from "../app/features/UrlControllerSlice";
import { handlePopupView } from "../app/features/FlowControlSlice";
// icons
import { Trash2, Copy, Edit2, CheckCheck } from "lucide-react";

// main
const ActionHandler = ({ info }) => {
  // state
  const { dispatch: ControlPopup } = useSlices("flowControl");
  const { dispatch: SetUrlInfo } = useSlices("urlControl");
  const [isCopy, setIsCopy] = useState(false);

  // handle Copy
  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    setIsCopy(true);
    // auto
    setTimeout(() => {
      setIsCopy(false);
    }, 1200);
  };

  // handle update
  const handleUpdate = async () => {
    await SetUrlInfo(handleTarget(info));
    await ControlPopup(handlePopupView("linkUpdate"));
  };

  // handle delete
  const handleDelete = async () => {
    await SetUrlInfo(handleTarget(info));
    await ControlPopup(handlePopupView("linkDeletion"));
  };

  return (
    <div className="flex items-center justify-end gap-2 transition-opacity">
      <button
        onClick={() =>
          //! Need to Change Backend URL
          handleCopy(`${import.meta.env.VITE_API_LINK}/${info.shortURL}`)
        }
        className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors cursor-pointer"
      >
        {isCopy ? (
          <CheckCheck className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
      <button
        onClick={handleUpdate}
        className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors cursor-pointer"
      >
        <Edit2 className="w-4 h-4" />
      </button>
      <button
        onClick={handleDelete}
        className="p-1.5 text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 rounded-md transition-colors cursor-pointer"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ActionHandler;
