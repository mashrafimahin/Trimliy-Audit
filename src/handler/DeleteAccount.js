// delete account permanently
export const deleteAccountPermanently = async (password) => {
  try {
    const response = await fetch(
      "http://localhost:8380/authentication/deleteAccount",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: password }),
        credentials: "include",
      },
    );
    // data
    const data = await response.json();
    // redirection on success
    if (data.success) {
      setTimeout(() => {
        localStorage.clear();
        window.location.href = data.redirectTo || "/";
      }, 1200);
    }
    return data;
  } catch (err) {
    console.log(err?.message);
    return false;
  }
};
