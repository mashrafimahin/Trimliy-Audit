// main
export const checkFunc = async () => {
  // ref
  const reference = {
    userId: localStorage.getItem("user_id"),
    refreshToken: localStorage.getItem("refresh"),
  };
  // request
  const response = await fetch(import.meta.env.VITE_ACCOUNT_CHECK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reference),
    credentials: "include",
  });
  // response
  const data = await response.json();
  // data set
  return data.success;
};
