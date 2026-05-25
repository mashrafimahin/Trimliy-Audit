// dependencies
import { useState } from "react";
import { useSlices } from "../hooks/useSlices";
// controller
import { handlePopupView } from "../app/features/FlowControlSlice";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// icons
import { X, Link2, Globe, Tag, Sparkles } from "lucide-react";
// component
import Input from "../components/Input";
import Button from "../components/Button";

// main
const CreateLinkLayout = () => {
  // redux state
  const { dispatch } = useSlices("flowControl");
  // state
  const [formInfo, setFormInfo] = useState({
    fullUrl: "",
    shortUrl: "",
    title: "",
  });

  // handle popup
  const handlePopup = () => {
    dispatch(handlePopupView());
  };

  // handle data change
  const updateData = (event) => {
    setFormInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInfo);
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
              Create New Link
            </Header>
            <Paragraph variant={"small"} className={"text-xs mb-0"}>
              Shorten and track your URL
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
          {/* Destination URL */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Globe className="w-4 h-4 text-slate-400" />
              Destination URL <span className="text-red-400">*</span>
            </label>
            <Input
              type={"url"}
              name={"fullUrl"}
              placeholder={"https://example.com/long-url-path"}
              value={formInfo.fullUrl}
              setValue={updateData}
              className="bg-navy-900/50"
              required
            />
          </div>

          {/* Short Link Section */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-slate-400" />
              Short Link
            </label>
            <div className="flex gap-2">
              <div className="flex items-center px-4 bg-navy-800/50 border border-white/10 rounded-xl text-slate-400 text-sm whitespace-nowrap backdrop-blur-sm">
                trim.ly /
              </div>
              <Input
                type={"text"}
                name={"shortUrl"}
                placeholder={"custom-title (optional)"}
                value={formInfo.shortUrl}
                setValue={updateData}
              />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400" />
              Title (Optional)
            </label>
            <Input
              type={"text"}
              name={"title"}
              placeholder={"e.g. Fall Marketing Campaign"}
              value={formInfo.title}
              setValue={updateData}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 pt-4 border-t border-white/5 flex items-center justify-end gap-3 bg-navy-900/80 backdrop-blur-md">
          <Button type="submit">Create Link</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateLinkLayout;
