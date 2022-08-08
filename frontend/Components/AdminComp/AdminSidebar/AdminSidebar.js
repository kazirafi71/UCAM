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
  },
  {
    title: "User",
    url: "/admin/users/viewusers",
  },
  {
    title: "Settings",
    url: "/admin/settings",
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
                    router.pathname === item.url
                      ? `${Styles.activeSideMenu_style}`
                      : `${Styles.normalSideMenu_style}`
                  }
                  key={index}
                  onClick={() => {
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
