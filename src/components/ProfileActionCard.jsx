// dependencies
import { useState } from "react";
// typography
import Header from "../typography/Header";
import Paragraph from "../typography/Paragraph";
// icon
import { PenBoxIcon, User } from "lucide-react";
// component
import Input from "./Input";
import Button from "./Button";
// style
const commonStyle = "mb-0 mt-2 border border-slate-800 p-2 pl-4 rounded-md";

// main
const ProfileActionCard = ({ data }) => {
  // state
  const [edit, setEdit] = useState(false);
  const [profileInfo, setProfileInfo] = useState(data.profileSetting);

  // handle click
  const handleClick = () => {
    setEdit((prevState) => !prevState);
  };

  // handle edit data
  const updateState = (event) => {
    setProfileInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="p-6 md:p-8">
      <Header variant={"h3"}>Profile Settings</Header>

      <div className="flex items-center gap-6 mb-8">
        {/* profile photo */}
        <div className="relative">
          <img
            src={data.profileSetting.img}
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
            {`${data.profileSetting.firstName} ${data.profileSetting.lastName}`}
          </Header>
          <Paragraph variant={"small"} className={"mb-2 text-sm"}>
            {data.profileSetting.userName}
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
            {edit ? (
              <Input
                type={"text"}
                name={"firstName"}
                value={profileInfo.firstName}
                setValue={updateState}
                placeholder={profileInfo.firstName}
              />
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
            {edit ? (
              <Input
                type={"text"}
                name={"lastName"}
                value={profileInfo.lastName}
                setValue={updateState}
                placeholder={profileInfo.lastName}
              />
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
          {edit ? (
            <Input
              type={"email"}
              name={"email"}
              value={profileInfo.email}
              setValue={updateState}
              placeholder={profileInfo.email}
            />
          ) : (
            <Paragraph variant={"small"} className={commonStyle}>
              {profileInfo.email}
            </Paragraph>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">
            Company Name (Optional)
          </label>
          {edit ? (
            <Input
              type={"text"}
              name={"company"}
              value={profileInfo.company}
              setValue={updateState}
              placeholder={profileInfo.company}
            />
          ) : (
            <Paragraph variant={"small"} className={commonStyle}>
              {profileInfo.company || "No company"}
            </Paragraph>
          )}
        </div>

        <div className="pt-4 flex justify-end">
          {edit ? (
            <div className="flex gap-4">
              <Button className={"bg-red-700"} onClick={handleClick}>
                Cancel
              </Button>
              <Button>Save Changes</Button>
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
