import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import Typography from "@mui/material/Typography";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Main>
        <DrawerHeader />
        <Typography paragraph>
          Dashboard software is an information management tool that tracks,
          gathers, and displays business data in interactive and customizable
          visualizations that enable users to monitor the health of a business,
          analyze processes, and provide them with actionable insights.
        </Typography>
        <Typography>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzK8dFllLxjxUFH8Y7e2mYcSQmiygNCZMBBMXrym1v4HKkwHZrtxepw29ZBvDuXyvwHHc&usqp=CAU"
            alt="loho"
          />
        </Typography>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
      ></Drawer>
    </Box>
  );
}

export default Dashboard;
