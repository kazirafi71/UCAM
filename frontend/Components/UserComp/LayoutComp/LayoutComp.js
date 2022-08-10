import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkTokenAction } from "../../../redux/token/tokenAction";
import getLocalStorageData from "../../../utils/localStorageData";
import NavbarComp from "../NavbarComp/NavbarComp";

const LayoutComp = ({ children }) => {
  const router = useRouter();
  const checkToken = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const user_token = getLocalStorageData();

  useEffect(() => {
    dispatch(checkTokenAction(user_token));
    if (!user_token) {
      router.push("/login");
    }
    // else if (!checkToken?.is_valid_token) {
    //   router.push("/login");
    // }
  }, [checkToken, user_token]);

  return (
    <div>
      <NavbarComp />
      {children}
    </div>
  );
};

export default LayoutComp;
