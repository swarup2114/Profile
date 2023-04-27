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

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <Main>
        <DrawerHeader />
        <Typography paragraph>
          This company is an organisation — owned either by state or private —
          established for profit whose primary products are various forms of
          software, software technology, distribution, and software product
          development. They make up the software industry.
        </Typography>
        <div>
          <img
            src="https://weblium.com/blog/wp-content/uploads/2019/01/image12-1000x542.png"
            alt="home"
          />
        </div>
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
