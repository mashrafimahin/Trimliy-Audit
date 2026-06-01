// main
export const AccountCreation = async (userData) => {
  try {
    // request server
    await fetch(import.meta.env.VITE_ACCOUNT_CREATION, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    // return status
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
