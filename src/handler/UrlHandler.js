// create url
export const UrlCreation = async (urlData) => {
  // make new reference of urlData
  const userId = localStorage.getItem("user_id");
  const newUrlData = {
    ...urlData,
    userId,
    // Remove empty shortUrl
    shortUrl: urlData.shortUrl.trim() || undefined,
  };

  try {
    // request server
    const response = await fetch(import.meta.env.VITE_ACCOUNT_URL_CREATION, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUrlData),
      credentials: "include",
    });
    // actions
    const data = await response.json();
    // redirect - only if redirectTo exists
    if (data.redirectTo) {
      setTimeout(() => {
        window.location.href = data.redirectTo;
      }, 1000);
    }
    // response
    return data;
  } catch (err) {
    console.log(err);
    return err?.message;
  }
};

// update url
export const UrlUpdate = async (urlData) => {
  // make new reference of urlData
  const userId = localStorage.getItem("user_id");
  const newUrlData = {
    ...urlData,
    userId,
  };

  try {
    // request server
    const response = await fetch(import.meta.env.VITE_ACCOUNT_URL_UPDATE, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUrlData),
      credentials: "include",
    });
    // actions
    const data = await response.json();
    // redirect - only if redirectTo exists
    if (data.redirectTo) {
      setTimeout(() => {
        window.location.href = data.redirectTo;
      }, 1000);
    }
    // response
    return data;
  } catch (err) {
    console.log(err);
    return err?.message;
  }
};

// delete url
export const UrlDeletion = async (urlId) => {
  try {
    // request server
    const response = await fetch(import.meta.env.VITE_ACCOUNT_URL_LINKS, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ linkId: urlId }),
      credentials: "include",
    });
    // actions
    const data = await response.json();
    // redirect - only if redirectTo exists
    if (data.redirectTo) {
      setTimeout(() => {
        window.location.href = data.redirectTo;
      }, 1000);
    }
  } catch (err) {
    console.log(err);
    return err?.message;
  }
};
