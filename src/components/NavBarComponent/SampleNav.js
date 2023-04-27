import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import Games from "./Games";
import AccountStatement from "../NavBarComponent/AccountStatement";
import About from "./About";
import Home from "./Home";

const drawerWidth = 240;

export default function NavBar() {
  const tabListItems = [
    {
      name: "Home",
      path: "./home",
    },
    {
      name: "Dashboard",
      path: "./dashboard",
    },
    {
      name: "Games",
      path: "./games",
    },
    {
      name: "Transaction",
      path: "./transactions",
    },
    {
      name: "About",
      path: "./about",
    },
  ];

  return (
    <div className="Class0">
      <div className="RoutingBar">
        <BrowserRouter className="class1">
          <Box sx={{ display: "flex" }} className="class1">
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{ zIndex: (theme) => theme.zIndex.drawer - 1 }}
            ></AppBar>
            <Drawer
              className="class2"
              variant="permanent"
              sx={{
                width: drawerWidth,

                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
            >
              <Toolbar className="class3" />
              <Box sx={{ overflow: "auto" }} className="class4  ">
                <List className="list-items">
                  {tabListItems.map((tab, index) => (
                    <NavLink
                      style={{ textDecoration: "none" }}
                      key={index}
                      to={tab.path}
                    >
                      <ListItem
                        key={tab.name}
                        disablePadding
                        className="class4"
                      >
                        <ListItemButton className="Class5">
                          <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={tab.name} />
                        </ListItemButton>
                      </ListItem>
                    </NavLink>
                  ))}
                </List>
                <Divider />
              </Box>
            </Drawer>
            <Routes className="class6">
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/games" element={<Games />} />
              <Route path="/transactions" element={<AccountStatement />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={"hello"} />
            </Routes>
          </Box>
        </BrowserRouter>
      </div>
    </div>
  );
}
