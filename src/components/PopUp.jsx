// dependencies
// layout
import CreateLinkLayout from "../layout/CreateLink.layout";

// main
const PopUp = ({ linkCreation }) => {
  return (
    <div>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-100" />

      {/* Modal Container */}
      <div className="fixed inset-0 z-101 flex items-center justify-center p-4 pointer-events-none">
        <div className="w-full max-w-lg pointer-events-auto">
          {/* content */}
          <div className="p-0 overflow-hidden border border-white/10 shadow-2xl relative">
            {linkCreation && <CreateLinkLayout />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
