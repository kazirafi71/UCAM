import { useRouter } from "next/router";
import React, { useEffect } from "react";
import getLocalStorageData from "../../../utils/localStorageData";
import NavbarComp from "../NavbarComp/NavbarComp";

const LayoutComp = ({ children }) => {
  const router = useRouter();
  const user_token = getLocalStorageData();
  useEffect(() => {
    if (!user_token) {
      router.push("/login");
    }
  }, []);
  return (
    <div>
      <NavbarComp />
      {children}
    </div>
  );
};

export default LayoutComp;
