// dependencies
import { useState, useEffect } from "react";

export const useAuth = () => {
  // state
  const [auth, setAuth] = useState(true);
  const reference = {
    userId: localStorage.getItem("user_id"),
    refreshToken: localStorage.getItem("refresh"),
  };

  // get value from server
  useEffect(() => {
    const checkFunc = async () => {
      const response = await fetch(import.meta.env.VITE_ACCOUNT_CHECK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reference),
        credentials: "include",
      });

      const data = await response.json();
      setAuth(data.success);
    };

    checkFunc();
  }, []);

  return auth;
};
