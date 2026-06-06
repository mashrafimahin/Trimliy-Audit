// dependencies
import { useState } from "react";
import { useSlices } from "../hooks/useSlices";
// utility
import { cn } from "../utils/ClassMerger";
// controller
import { UpdateURL } from "../app/features/UrlControllerSlice";
import { handlePopupView } from "../app/features/FlowControlSlice";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// icons
import { X, Link2, Globe, Tag, Sparkles, LockKeyhole } from "lucide-react";
// component
import Input from "../components/Input";
import Button from "../components/Button";

// main
const UpdateLinkLayout = () => {
  // redux state
  const { dispatch } = useSlices("flowControl");
  const { data, dispatch: updateDispatch } = useSlices("urlControl");
  // state — only title is editable
  const [formInfo, setFormInfo] = useState({
    title: data.targetedLink?.title || "",
    linkId: data.targetedLink.linkId,
  });

  // handle popup
  const handlePopup = () => {
    dispatch(handlePopupView());
  };

  // handle data change (title only)
  const updateData = (event) => {
    setFormInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    updateDispatch(UpdateURL(formInfo));
  };

  return (
    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <Link2 className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <Header variant={"h3"} className={"mb-0 text-xl"}>
              Update Link
            </Header>
            <Paragraph variant={"small"} className={"text-xs mb-0"}>
              Edit your link details
            </Paragraph>
          </div>
        </div>
        <Button variant={"regular"} className={"p-2"} onClick={handlePopup}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="flex flex-col max-h-[80vh]">
        <div className="p-6 space-y-5 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {/* Destination URL — read-only */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-500 flex items-center gap-2">
              <Globe className="w-4 h-4 text-slate-600" />
              Destination URL
              <span className="ml-auto flex items-center gap-1 text-xs text-slate-600 font-normal">
                <LockKeyhole className="w-3 h-3" />
                Not editable
              </span>
            </label>
            <Input
              type={"text"}
              name={"fullUrl"}
              value={data.targetedLink?.fullURL || ""}
              setValue={() => {}}
              className="opacity-50 cursor-not-allowed select-none pointer-events-none bg-navy-900/30"
              readOnly
              disabled
            />
          </div>

          {/* Short Link Section — read-only */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-500 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-slate-600" />
              Short Link
              <span className="ml-auto flex items-center gap-1 text-xs text-slate-600 font-normal">
                <LockKeyhole className="w-3 h-3" />
                Not editable
              </span>
            </label>
            <div className="flex gap-2">
              <div className="flex items-center px-4 bg-navy-800/30 border border-white/5 rounded-xl text-slate-600 text-sm whitespace-nowrap backdrop-blur-sm opacity-50">
                fy.app/
              </div>
              <Input
                type={"text"}
                name={"shortUrl"}
                value={data.targetedLink?.shortURL || ""}
                setValue={() => {}}
                className="opacity-50 cursor-not-allowed select-none pointer-events-none bg-navy-900/30"
                readOnly
                disabled
              />
            </div>
          </div>

          {/* Title — editable */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400" />
              Title
            </label>
            <Input
              type={"text"}
              name={"title"}
              value={formInfo.title}
              setValue={updateData}
              placeholder={"e.g. Fall Marketing Campaign"}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3 bg-navy-900/80 backdrop-blur-md">
          {data.error || data.showState ? (
            <p
              className={cn(
                "text-md font-semibold",
                data.error ? "text-red-500" : "text-green-500",
              )}
            >
              {data.message}
            </p>
          ) : (
            "-"
          )}
          <Button type="submit">Update Link</Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateLinkLayout;
