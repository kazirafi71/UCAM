import React, { useState } from "react";
import Styles from "./AdminNav.module.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { sidebarSlice } from "../../../redux/sidebar/sidebarSlice";
const { actions: slice } = sidebarSlice;

const AdminNav = () => {
  // console.log(slice);
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
          <AiOutlineMenuUnfold
            onClick={sidebarHandler}
            className={Styles.menuIcon__style}
          />
          {/* <h4>UCAM</h4> */}
        </div>
        <div className={Styles.rightNav__style}>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
