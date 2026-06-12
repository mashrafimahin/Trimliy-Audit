// main
export const AccountLogOut = async () => {
  // local data
  const ref = {
    userId: localStorage.getItem("user_id"),
    refreshToken: localStorage.getItem("refresh"),
  };

  try {
    // request server
    const response = await fetch(
      `${import.meta.env.VITE_API_LINK}/authentication/logout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ref),
        credentials: "include",
      },
    );
    // actions
    const data = await response.json();
    // response
    if (data.success) {
      // clean local storage
      localStorage.clear();
      // redirect
      setTimeout(() => {
        window.location.href = data.redirectTo;
      }, 800);
    }
  } catch (err) {
    console.log(err);
  }
};
