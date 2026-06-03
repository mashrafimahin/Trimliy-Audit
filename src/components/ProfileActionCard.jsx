// dependencies
import { useValidation } from "../hooks/useValidation";
// states
import { useSlices } from "../hooks/useSlices";
import { handleEditButton, updateInfo } from "../app/features/OverviewSlice";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// icon
import { PenBoxIcon, User } from "lucide-react";
// component
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
// style
const commonStyle = "mb-0 mt-2 border border-slate-800 p-2 pl-4 rounded-md";

// main
const ProfileActionCard = () => {
  const { data, dispatch } = useSlices("overviewData");
  const [profileInfo, setProfileInfo] = useState(data.profile.info);
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
    console.log(result);
    if (!result.isFormValid) {
      setErrors(result.errors);
      return;
    }
    console.log("clicked");
    setErrors({});
    dispatch(updateInfo(profileInfo));
    dispatch(handleEditButton());
  };

  return (
    <div className="p-6 md:p-8">
      <Header variant={"h3"}>Profile Settings</Header>

      <div className="flex items-center gap-6 mb-8">
        {/* profile photo */}
        <div className="relative">
          <img
            src={data.profile.info.img}
            alt="Avatar"
            className="w-20 h-20 rounded-full ring-4 ring-navy-900"
            draggable={false}
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 p-1.5 rounded-full border-2 border-navy-900 text-white hover:bg-blue-700 transition-colors">
            <User className="w-4 h-4" />
          </button>
        </div>
        {/* profile details */}
        <div>
          <Header variant={"h3"} className={"mb-1 text-xl"}>
            {`${data.profile.info.firstName} ${data.profile.info.lastName}`}
          </Header>
          <Paragraph variant={"small"} className={"mb-2 text-sm"}>
            {data.profile.info.userName}
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
                  placeholder={data.profile.info.firstName}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </>
            ) : (
              <Paragraph variant={"small"} className={commonStyle}>
                {data.profile.info.firstName}
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
                  placeholder={data.profile.info.lastName}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </>
            ) : (
              <Paragraph variant={"small"} className={commonStyle}>
                {data.profile.info.lastName}
              </Paragraph>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">
            Email Address
          </label>
          {data.profile.settings.editing ? (
            <>
              <Input
                type={"email"}
                name={"email"}
                value={profileInfo.email}
                setValue={updateState}
                placeholder={data.profile.info.email}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </>
          ) : (
            <Paragraph variant={"small"} className={commonStyle}>
              {data.profile.info.email}
            </Paragraph>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">
            Company Name (Optional)
          </label>
          {data.profile.settings.editing ? (
            <>
              <Input
                type={"text"}
                name={"company"}
                value={profileInfo.company}
                setValue={updateState}
                placeholder={data.profile.info.company}
              />
            </>
          ) : (
            <Paragraph variant={"small"} className={commonStyle}>
              {data.profile.info.company || "No company"}
            </Paragraph>
          )}
        </div>

        <div className="pt-4 flex justify-end">
          {data.profile.settings.editing ? (
            <div className="flex gap-4">
              <Button className={"bg-red-700"} onClick={handleClick}>
                Cancel
              </Button>
              <Button onClick={saveChanges}>Save Changes</Button>
            </div>
          ) : (
            <Button onClick={handleClick}>
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
