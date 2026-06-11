// send email
export const sendRecoveryEmail = async (userEmail) => {
  try {
    const response = await fetch("http://localhost:8380/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail: userEmail }),
      credentials: "include",
    });
    // set data to local
    localStorage.setItem("userEmail", userEmail);
    // data
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err?.message);
    return false;
  }
};

// send otp
export const sendRecoveryOTP = async (otp) => {
  // email
  const userEmail = localStorage.getItem("userEmail");

  try {
    const response = await fetch("http://localhost:8380/checkOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail, otp: otp }),
      credentials: "include",
    });
    // data
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err?.message);
    return false;
  }
};

// set new password
export const setNewPassword = async (pass) => {
  // email
  const userEmail = localStorage.getItem("userEmail");

  try {
    const response = await fetch("http://localhost:8380/newPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail, newPassword: pass }),
      credentials: "include",
    });
    // data
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err?.message);
    return false;
  }
};
