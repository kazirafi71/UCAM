import React, { useEffect, useState } from "react";
import Styles from "./NavbarComp.module.css";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import getLocalStorageData from "../../../utils/localStorageData";
import { clearStudentInfoReducer } from "../../../redux/student/studentSlice";
import jwt_decode from "jwt-decode";

const NavbarComp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { errorMsg, isLoading, student_profile } = useSelector(
    (state) => state.student
  );
  const { teacher_profile } = useSelector((state) => state.teacher);
  const [auth_token, setAuthToken] = useState("");
  const [tokenInfo, setTokenInfo] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let token = localStorage.getItem("auth_token");
      setAuthToken(token);
      if (token) {
        var decoded = jwt_decode(token);
        setTokenInfo(decoded);
      }
    }
  }, []);

  // console.log(teacher_profile);

  return (
    <div className={Styles.mainNav__style}>
      <Toaster />
      <div className={Styles.leftNav__style}>
        <Link href="/">
          <a>
            <h4>UCAM</h4>
          </a>
        </Link>
      </div>

      <div className={Styles.middleNav__style}>
        {auth_token ? (
          <>
            <li
              className={
                router.pathname == "/"
                  ? `${Styles.activeNav__style}`
                  : `${Styles.normalNav__style}`
              }
            >
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li
              className={
                router.pathname == "/profile"
                  ? `${Styles.activeNav__style}`
                  : `${Styles.normalNav__style}`
              }
            >
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
            {tokenInfo && tokenInfo?.role === "Teacher" ? (
              <>
                <li
                  className={
                    router.pathname == "/coursehistory"
                      ? `${Styles.activeNav__style}`
                      : `${Styles.normalNav__style}`
                  }
                >
                  {" "}
                  <Link href="/teachercourses">
                    <a>Course</a>
                  </Link>
                </li>
                <li
                  className={
                    router.pathname == "/attendance/takeattendance"
                      ? `${Styles.activeNav__style}`
                      : `${Styles.normalNav__style}`
                  }
                >
                  {" "}
                  <Link href="/attendance/takeattendance">
                    <a>Attendance</a>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li
                  className={
                    router.pathname == "/coursehistory"
                      ? `${Styles.activeNav__style}`
                      : `${Styles.normalNav__style}`
                  }
                >
                  {" "}
                  <Link href="/coursehistory">
                    <a>Course</a>
                  </Link>
                </li>
                <li
                  className={
                    router.pathname == "/attendance/attendancesummary"
                      ? `${Styles.activeNav__style}`
                      : `${Styles.normalNav__style}`
                  }
                >
                  {" "}
                  <Link href="/attendance/attendancesummary">
                    <a>Attendance</a>
                  </Link>
                </li>
              </>
            )}

            <li
              className={
                router.pathname == "/marks/currentexammarks"
                  ? `${Styles.activeNav__style}`
                  : `${Styles.normalNav__style}`
              }
            >
              <Link href="/marks/currentexammarks">
                <a>Marks</a>
              </Link>
            </li>

            <li
              className={
                router.pathname == "/bill"
                  ? `${Styles.activeNav__style}`
                  : `${Styles.normalNav__style}`
              }
            >
              {" "}
              <Link href="/bill">
                <a>Bill</a>
              </Link>
            </li>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className={Styles.mobileNav__style}>
        <MobileNavbar />
      </div>
      {auth_token ? (
        <>
          <div className={Styles.rightNav__style}>
            <div className="me-2">
              <b>{student_profile?.fullName || teacher_profile?.fullName}</b>{" "}
              <br />
              <small>{student_profile?.roll_number}</small>{" "}
              {student_profile && "/"}
              <small
                style={{ cursor: "pointer" }}
                onClick={() => {
                  localStorage.removeItem("auth_token");
                  dispatch(clearStudentInfoReducer());
                  toast.success("You are logged out");
                  router.push("/login");
                }}
              >
                Logout
              </small>
            </div>
            <Avatar
              src={
                student_profile?.profile_img ||
                teacher_profile?.profile_img ||
                ""
              }
            />
          </div>
        </>
      ) : (
        <div className={Styles.login__Style}>
          <li
            className={
              router.pathname == "/login"
                ? `${Styles.activeNav__style}`
                : `${Styles.normalNav__style}`
            }
          >
            {" "}
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        </div>
      )}
    </div>
  );
};

export default NavbarComp;
