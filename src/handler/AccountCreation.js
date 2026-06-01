// main
export const AccountCreation = async (userData) => {
  try {
    // request server
    const response = await fetch(import.meta.env.VITE_ACCOUNT_CREATION, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });
    // actions
    const data = await response.json();
    // response
    if (data.success) {
      // redirect
      setTimeout(() => {
        window.location.href = data.redirectTo;
      }, 800);
    }
  } catch (err) {
    console.log(err);
  }
};
