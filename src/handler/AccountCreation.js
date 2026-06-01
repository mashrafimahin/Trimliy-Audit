// main
export const AccountCreation = async (state, action) => {
  try {
    // request server
    const response = await fetch(import.meta.env.VITE_ACCOUNT_CREATION, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });
    // parse data
    const data = await response.json();
    // return status
    console.log(data);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
