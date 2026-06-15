// dependencies
import { useValidation } from "../hooks/useValidation";
import { cn } from "../utils/ClassMerger";
// states
import { useSlices } from "../hooks/useSlices";
import { handleEditButton, updateUser } from "../app/features/OverviewSlice";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// icon
import { PenBoxIcon, User } from "lucide-react";
import UserPlaceholder from "../assets/icons/userPlaceholder.webp";
// component
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
// style
const commonStyle = "mb-0 mt-2 border border-slate-800 p-2 pl-4 rounded-md";

// main
const ProfileActionCard = () => {
  const { data, dispatch } = useSlices("overviewData");
  const [profileInfo, setProfileInfo] = useState(...data.profile.info);
  const [errors, setErrors] = useState({});

  // handle click
  const handleClick = () => {
    setErrors({});
    dispatch(handleEditButton());
  };

  // handle edit data
  const updateState = (event) => {
    setProfileInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    // Clear error for this field when user starts typing
    setErrors((prev) => ({
      ...prev,
      [event.target.name]: "",
    }));
  };

  // save changed data
  const saveChanges = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const result = useValidation(profileInfo);
    if (!result.isFormValid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    // handle edit
    dispatch(updateUser(profileInfo));
  };

  return (
    <div className="md:p-8">
      <Header variant={"h3"}>Profile Settings</Header>

      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 mt-4 sm:mt-0">
        {/* profile photo */}
        <div className="relative">
          <img
            src={profileInfo.img || UserPlaceholder}
            alt="Avatar"
            className="w-20 h-20 rounded-full ring-4 ring-navy-900"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 p-1.5 rounded-full border-2 border-navy-900 text-white hover:bg-blue-700 transition-colors">
            <User className="w-4 h-4" />
          </button>
        </div>
        {/* profile details */}
        <div>
          <Header variant={"h3"} className={"mb-1 text-xl"}>
            {`${profileInfo.firstName} ${profileInfo.lastName}`}
          </Header>
          <Paragraph variant={"small"} className={"mb-2 text-sm"}>
            {`@${profileInfo.userId}`}
          </Paragraph>
        </div>
      </div>

      {/* details */}
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">
              First Name
            </label>
            {data.profile.settings.editing ? (
              <>
                <Input
                  type={"text"}
                  name={"firstName"}
                  value={profileInfo.firstName}
                  setValue={updateState}
                  placeholder={profileInfo.firstName}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </>
            ) : (
              <Paragraph variant={"small"} className={commonStyle}>
                {profileInfo.firstName}
              </Paragraph>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">
              Last Name
            </label>
            {data.profile.settings.editing ? (
              <>
                <Input
                  type={"text"}
                  name={"lastName"}
                  value={profileInfo.lastName}
                  setValue={updateState}
                  placeholder={profileInfo.lastName}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </>
            ) : (
              <Paragraph variant={"small"} className={commonStyle}>
                {profileInfo.lastName}
              </Paragraph>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">
            Email Address
          </label>
          <Paragraph variant={"small"} className={commonStyle}>
            {profileInfo.email}
          </Paragraph>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">
            URL Handles
          </label>
          <Paragraph variant={"small"} className={commonStyle}>
            {profileInfo.urlHandles || "Not yet"}
          </Paragraph>
        </div>

        <div className="pt-4 flex justify-end">
          {data.profile.settings.updated && (
            <p className="text-green-500 text-md font-semibold mt-1 mr-4">
              {data.profile.settings.updateMessage}
            </p>
          )}
          {data.profile.settings.editing ? (
            <div className="flex gap-1 md:4">
              <Button
                className={cn(
                  "bg-red-700",
                  data.updatingUser ? "cursor-no-drop w-auto" : "w-auto",
                )}
                onClick={handleClick}
                disabled={data.updatingUser}
              >
                Cancel
              </Button>
              <Button onClick={saveChanges} className={"w-auto"}>
                Save Changes
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleClick}
              disabled={data.updatingUser}
              className={cn(
                data.updatingUser ? "cursor-no-drop sm:w-auto" : "sm:w-auto",
              )}
            >
              <PenBoxIcon size={15} className="mr-2" />
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileActionCard;
