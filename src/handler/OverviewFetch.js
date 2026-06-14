// dependencies
import { DevicePercentage } from "../utils/DevicePercentage";

// main
export const OverviewFetch = async () => {
  // user id
  const userId = localStorage.getItem("user_id");

  try {
    // request server
    const response = await fetch(`${import.meta.env.VITE_API_LINK}/all`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
      credentials: "include",
    });
    // actions
    const data = await response.json();
    // modify data
    const newUrlDate = data.urlData.map(
      (item) => item.createdDate.split("T")[0],
    );
    const newUrlData = data.urlData.map((elm, i) => ({
      ...elm,
      createdDate: newUrlDate[i],
    }));

    // devices
    const clickedDevices = [];
    const targetedDevices = newUrlData.map((item) => item.devices).flat();
    // add devices
    clickedDevices.push(
      {
        name: "Desktop",
        percent: DevicePercentage(targetedDevices, "desktop"),
        color: "bg-purple-500",
      },

      {
        name: "Mobile",
        percent: DevicePercentage(targetedDevices, "mobile"),
        color: "bg-blue-500",
      },
      {
        name: "Tablet",
        percent: DevicePercentage(targetedDevices, "tablet"),
        color: "bg-cyan-500",
      },
    );

    // original data + modified data
    const newData = {
      ...data,
      urlData: newUrlData,
      devices: clickedDevices,
    };

    // response
    return newData;
  } catch (err) {
    console.log(err);
    return;
  }
};
