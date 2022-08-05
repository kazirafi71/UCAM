const getLocalStorageData = () => {
  if (typeof window !== "undefined") {
    const auth_token = localStorage.getItem("auth_token");
    return auth_token;
  } else {
    console.log("You are on the server");
    // 👉️ can't use localStorage
  }
};

export default getLocalStorageData;
