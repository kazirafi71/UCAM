import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Styles from "./MobileNav.module.css";
import Image from "next/image";
import { Divider } from "@mui/material";

export default function MobileNavbar() {
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
      <div className="text-center pt-1">
        <Image
          style={{ borderRadius: "50%" }}
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          width={100}
          height={100}
        />
        <h6 className="pt-2">Kazi Musaddi Rafi</h6>
        <p>19511071</p>
        <Divider />
      </div>

      <List>
        <ListItem>
          <Link href="/">
            <a
              className={
                router?.pathname == "/"
                  ? `${Styles.activeMenuitem__style}`
                  : `${Styles.menuitem__style}`
              }
            >
              Home
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/profile">
            <a
              className={
                router?.pathname == "/profile"
                  ? `${Styles.activeMenuitem__style}`
                  : `${Styles.menuitem__style}`
              }
            >
              Profile
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/coursehistory">
            <a
              className={
                router?.pathname == "/coursehistory"
                  ? `${Styles.activeMenuitem__style}`
                  : `${Styles.menuitem__style}`
              }
            >
              Course
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/attendance/attendancesummary">
            <a
              className={
                router?.pathname == "/attendance/attendancesummary"
                  ? `${Styles.activeMenuitem__style}`
                  : `${Styles.menuitem__style}`
              }
            >
              Attendance
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/marks/currentexammarks">
            <a
              className={
                router?.pathname == "/marks/currentexammarks"
                  ? `${Styles.activeMenuitem__style}`
                  : `${Styles.menuitem__style}`
              }
            >
              Marks
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/bill">
            <a
              className={
                router?.pathname == "/bill"
                  ? `${Styles.activeMenuitem__style}`
                  : `${Styles.menuitem__style}`
              }
            >
              Bill
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/login">
            <a
              className={
                router?.pathname == "/login"
                  ? `${Styles.activeMenuitem__style}`
                  : `${Styles.menuitem__style}`
              }
            >
              Logout
            </a>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{ color: "black", fontSize: 24 }}
            onClick={toggleDrawer(anchor, true)}
          >
            <AiOutlineMenu />
          </Button>
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
