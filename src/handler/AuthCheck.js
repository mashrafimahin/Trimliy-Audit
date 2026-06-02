const AuthCheck = async () => {
  const userId = localStorage.getItem("user_id");

  try {
    const response = await fetch(import.meta.env.VITE_ACCOUNT_CHECK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
      credentials: "include",
    });

    const data = await response.json();

    return data.success;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export default AuthCheck;
