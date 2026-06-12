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

    // original data + modified data
    const newData = {
      ...data,
      urlData: newUrlData,
    };

    // response
    return newData;
  } catch (err) {
    console.log(err);
    return;
  }
};
