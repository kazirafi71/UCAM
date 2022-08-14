import { useRouter } from "next/router";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentProfileInfoAction } from "../../../redux/student/studentAction";
import { checkTokenAction } from "../../../redux/token/tokenAction";
import getLocalStorageData from "../../../utils/localStorageData";
import LoadingComp from "../../CommonComp/LoadingComp/LoadingComp";
import NavbarComp from "../NavbarComp/NavbarComp";
import jwt_decode from "jwt-decode";

const LayoutComp = ({ children }) => {
  const router = useRouter();
  const checkToken = useSelector((state) => state.token);
  const dispatch = useDispatch();
  let user_token;
  let decoded;
  useEffect(() => {
    user_token = getLocalStorageData();

    if (!user_token) {
      router.push("/login");
    } else if (user_token) {
      decoded = jwt_decode(user_token);
      dispatch(getStudentProfileInfoAction(decoded?._id, user_token));
    }
  }, [checkToken, user_token, decoded]);

  return (
    <div>
      <NavbarComp />
      {children}
    </div>
  );
};

export default LayoutComp;
