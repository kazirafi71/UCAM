import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useRouter } from "next/router";
import * as React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { adminRoutes } from "../AdminRoutes";
import Styles from "./MobileSidebarComp.module.css";
import profileImg from "../../../../assets/Images/commonImg/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";

export default function MobileSidebarComp() {
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="text-center pt-3">
        <img className={Styles.profileImg__style} src={profileImg.src} alt="" />
        <h5 className="pt-2">Kazi Musaddi Rafi</h5>
        <p>kazirafi@gmail.com</p>
      </div>

      <Divider />
      <List>
        {adminRoutes &&
          adminRoutes?.map((item, index) => {
            return (
              <ListItem
                className={
                  router.pathname === item.url || router.pathname === item.url2
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
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <AiOutlineMenuUnfold
            onClick={toggleDrawer(anchor, true)}
            className={Styles.menuIcon__style}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
