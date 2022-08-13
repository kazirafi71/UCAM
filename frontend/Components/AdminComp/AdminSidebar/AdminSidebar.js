import { List, ListItem, Paper } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import Styles from "./AdminSidebar.module.css";
import { adminRoutes } from "./AdminRoutes";
import profileImg from "../../../assets/Images/commonImg/alex-suprun-ZHvM3XIOHoE-unsplash.jpg"

const AdminSidebar = () => {
  const router = useRouter();

  return (
    <div>
      <Paper className={Styles.sidebarMain__style}>
        <div className="text-center pt-3">
          <img
            className={Styles.profileImg__style}
            src={profileImg.src}
            alt=""
          />
          <h5 className="pt-2">Kazi Musaddi Rafi</h5>
          <p>kazirafi@gmail.com</p>
        </div>
        <List>
          {adminRoutes &&
            adminRoutes?.map((item, index) => {
              return (
                <ListItem
                  className={
                    router.pathname === item.url ||
                    router.pathname === item.url2
                      ? `${Styles.activeSideMenu_style}`
                      : `${Styles.normalSideMenu_style}`
                  }
                  key={index}
                  onClick={() => {
                    if (item.title === "Logout") {
                      localStorage.removeItem("admin_token");
                    }
                    router.push(`${item.url}`);
                  }}
                >
                  {item.title}
                </ListItem>
              );
            })}
        </List>
      </Paper>
    </div>
  );
};

export default AdminSidebar;
