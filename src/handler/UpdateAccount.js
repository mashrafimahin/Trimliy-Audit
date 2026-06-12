// update user
export const updateExistingUser = async (userData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_LINK}/authentication/updateAccount`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
        credentials: "include",
      },
    );
    // data
    const data = await response.json();
    // redirection
    if (data.success) {
      setTimeout(() => {
        window.location.href = data.redirectTo;
      }, 1200);
    } else {
      throw Error(data);
    }
    return data;
  } catch (err) {
    console.log(err?.message);
    return false;
  }
};
