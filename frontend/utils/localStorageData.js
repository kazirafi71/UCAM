import jwt_decode from "jwt-decode";

const getLocalStorageData = () => {
  if (typeof window !== "undefined") {
    const auth_token = localStorage.getItem("auth_token");
    return auth_token;
  } else {
    console.log("getLocalStorageData");
    // 👉️ can't use localStorage
  }
};

export const getAdminToken = () => {
  if (typeof window !== "undefined") {
    const admin_token = localStorage.getItem("admin_token");
    return admin_token;
  } else {
    console.log("getAdminToken");
    // 👉️ can't use localStorage
  }
};

export const decodedToken = () => {
  if (typeof window !== "undefined") {
    const auth_token = localStorage.getItem("auth_token");
    let decoded = jwt_decode(auth_token);
    return decoded;
  } else {
    console.log("decodedToken");
    // 👉️ can't use localStorage
  }
};

export default getLocalStorageData;
