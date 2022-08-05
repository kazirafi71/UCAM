import React from "react";
import Styles from "./NavbarComp.module.css";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const NavbarComp = () => {
  const router = useRouter();
  return (
    <div className={Styles.mainNav__style}>
      <div className={Styles.leftNav__style}>
        <Link href="/">
          <a>
            <h4>UCAM</h4>
          </a>
        </Link>
      </div>
      <div className={Styles.middleNav__style}>
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
      </div>
      <div className={Styles.mobileNav__style}>
        <MobileNavbar />
      </div>
      <div className={Styles.rightNav__style}>
        <div className="me-2">
          <b>KAZI MUSADDI RAFI</b> <br />
          <small>19511071</small> /<small>Logout</small>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default NavbarComp;
