// dependencies
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

const DeleteLinkLayout = () => {
  const { dispatch } = useSlices("flowControl");
  const { data: urlInfo } = useSlices("urlControl");

  const handlePopup = () => {
    dispatch(handlePopupView());
  };

  const handleDelete = () => {};

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
        <Button variant={"regular"} className={"p-2"} onClick={handlePopup}>
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
        <Button variant={"regular"} className={"flex-1"} onClick={handlePopup}>
          Cancel
        </Button>
        <Button
          variant={"danger"}
          className={"flex-1 gap-2 bg-red-500"}
          onClick={handleDelete}
        >
          <Trash2 className="w-4 h-4" />
          Delete link
        </Button>
      </div>
    </div>
  );
};

export default DeleteLinkLayout;
