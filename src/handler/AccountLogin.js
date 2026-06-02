// main
export const AccountLogin = async (userData) => {
  try {
    // request server
    const response = await fetch(import.meta.env.VITE_ACCOUNT_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });
    // actions
    const data = await response.json();
    console.log(data);
    // response
    if (data.success) {
      // save reference to local storage
      localStorage.setItem("user_id", data.userId);
      localStorage.setItem("refresh", data.refreshToken);
      // redirect
      setTimeout(() => {
        window.location.href = data.redirectTo;
      }, 800);
    }
  } catch (err) {
    console.log(err);
  }
};
