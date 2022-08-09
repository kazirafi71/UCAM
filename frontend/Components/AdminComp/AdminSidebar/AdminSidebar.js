import { List, ListItem, Paper } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import Styles from "./AdminSidebar.module.css";

const adminRoutes = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
  },
  {
    title: "Admin",
    url: "/admin/admins/viewadmins",
    url2: "/admin/users/addadmin",
  },
  {
    title: "User",
    url: "/admin/users/viewusers",
    url2: "/admin/users/adduser",
  },
  {
    title: "Settings",
    url: "/admin/settings",
  },
  {
    title: "Logout",
    url: "/admin/adminlogin",
  },
];

const AdminSidebar = () => {
  const router = useRouter();

  return (
    <div>
      <Paper>
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
