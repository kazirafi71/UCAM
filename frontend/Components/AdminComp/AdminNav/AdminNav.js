import React, { useState } from "react";
import Styles from "./AdminNav.module.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { sidebarSlice } from "../../../redux/sidebar/sidebarSlice";
import { useRouter } from "next/router";
import MobileSidebarComp from "../AdminSidebar/MobileSidebarComp/MobileSidebarComp";
const { actions: slice } = sidebarSlice;

const AdminNav = () => {
  // console.log(slice);
  const router = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const sidebarHandler = () => {
    setShow(!show);
    dispatch(slice.showSidebarReducer(!show));
  };
  return (
    <div>
      <div className={Styles.mainNav__style}>
        <div className={Styles.leftNav__style}>
          <div className={Styles.deskTopMenu__style}>
            <AiOutlineMenuUnfold
              onClick={sidebarHandler}
              className={Styles.menuIcon__style}
            />
          </div>
          <div className={Styles.mobileMenu__style}>
            {/* <AiOutlineMenuUnfold
              onClick={sidebarHandler}
              className={Styles.menuIcon__style}
            /> */}
            <MobileSidebarComp />
          </div>

          <button
            style={{ marginLeft: 20 }}
            onClick={() => router.push("/")}
            className="commonBtnTwo__style"
          >
            Go To Website
          </button>
        </div>
        <div className={Styles.rightNav__style}>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
