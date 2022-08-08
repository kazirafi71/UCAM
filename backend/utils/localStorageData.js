const getLocalStorageData = () => {
  if (typeof window !== "undefined") {
    const auth_token = localStorage.getItem("auth_token");
    return auth_token;
  } else {
    console.log("You are on the server");
    // 👉️ can't use localStorage
  }
};

export const getAdminToken = () => {
  if (typeof window !== "undefined") {
    const admin_token = localStorage.getItem("admin_token");
    return admin_token;
  } else {
    console.log("You are on the server");
    // 👉️ can't use localStorage
  }
};
export default getLocalStorageData;
