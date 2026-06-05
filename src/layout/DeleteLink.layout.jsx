// dependencies
import { useState } from "react";
import { useSlices } from "../hooks/useSlices";
// controller
import { handlePopupView } from "../app/features/FlowControlSlice";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// icons
import { X, Trash2, Link2, AlertTriangle } from "lucide-react";
// component
import Button from "../components/Button";
import { cn } from "../utils/ClassMerger";
import { DeleteURL } from "../app/features/UrlControllerSlice";

const DeleteLinkLayout = () => {
  // states
  const { dispatch } = useSlices("flowControl");
  const { data: urlInfo, dispatch: ControlUrl } = useSlices("urlControl");
  // fake timer
  const [timer, setTimer] = useState(false);

  // handle popup menu
  const handlePopup = () => {
    dispatch(handlePopupView());
  };

  // handle delete
  const handleDelete = () => {
    setTimer(true);
    setTimeout(() => {
      ControlUrl(DeleteURL(urlInfo.targetedLink.linkId));
    }, 1200);
  };

  return (
    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
            <Trash2 className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <Header variant={"h3"} className={"mb-0 text-xl"}>
              Delete link
            </Header>
            <Paragraph variant={"small"} className={"text-xs mb-0"}>
              This action cannot be undone
            </Paragraph>
          </div>
        </div>
        <Button
          variant={"regular"}
          onClick={handlePopup}
          className={cn("p-2", timer && "cursor-no-drop")}
          disabled={timer}
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        {/* Warning banner */}
        <div className="flex gap-3 p-4 rounded-xl bg-red-500/7 border border-red-500/20">
          <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-red-400 mb-1">
              Are you sure you want to delete this?
            </p>
            <p className="text-sm text-red-400/70 leading-relaxed">
              The link and all its analytics will be permanently removed. You
              won't be able to recover it.
            </p>
          </div>
        </div>

        {/* Link preview */}
        <div className="p-4 rounded-xl bg-white/3 border border-white/[0.07]">
          <p className="text-[11px] font-medium uppercase tracking-widest text-slate-500 mb-2">
            Link to delete
          </p>
          <div className="flex items-center gap-2">
            <Link2 className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <p className="text-sm font-medium text-slate-200">
                {urlInfo?.targetedLink?.title || "Untitled link"}
              </p>
              <p className="text-xs text-slate-500">
                fy.app/{urlInfo?.targetedLink?.shortURL} →{" "}
                {urlInfo?.targetedLink?.fullURL}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-0 flex gap-3">
        <Button
          variant={"regular"}
          onClick={handlePopup}
          className={cn("flex-1", timer && "cursor-no-drop")}
          disabled={timer}
        >
          Cancel
        </Button>
        <Button
          variant={"danger"}
          className={cn(
            "flex-1 gap-2 bg-red-500",
            timer && "bg-red-500/20 cursor-no-drop",
          )}
          onClick={handleDelete}
          disabled={timer}
        >
          <Trash2 className="w-4 h-4" />
          {timer ? "Deleting ...." : "Delete link"}
        </Button>
      </div>
    </div>
  );
};

export default DeleteLinkLayout;
