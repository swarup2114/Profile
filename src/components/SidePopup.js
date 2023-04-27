import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { userContext } from "../App";

const style = {
  position: "relative",
  top: "150px",
  width: "100px",
  height: "400px",
};

function SwipeableEdgeDrawer(props) {
  const [data, setData] = useContext(userContext);
  const [newInputData, setNewInputData] = useState({
    name: "swarup",
    email: "lucky",
    mobile: "1234",
    address: "ndk",
    balance: "1000",
  });
  function handleChange(e) {
    setNewInputData({ ...newInputData, [e.target.name]: e.target.value });
  }

  function savedData() {
    let empty = { name: "", email: "", mobile: "", address: "", balance: "" };
    setData({ ...newInputData });
    console.log(newInputData);
    setNewInputData(empty);
  }

  return (
    <div style={{ backgroundColor: "red" }}>
      <div style={{ zIndex: 999999 }}>
        <SwipeableDrawer
          sx={{
            width: "400px",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "400px",
              boxSizing: "border-box",
            },
          }}
          anchor="right"
          open={props.isOpen}
          onClose={() => props.toggleDrawer(false)}
          onOpen={() => props.toggleDrawer(true)}
          disableSwipeToOpen={false}
          swipeAreaWidth={400}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Card sx={{ minWidth: 275 }} className="cardItems" style={style}>
            <CardContent className="CardItems">
              <TextField
                label="Name"
                placeholder="Enter Name"
                value={newInputData.name}
                name="name"
                onChange={handleChange}
              />

              <TextField
                label="Email"
                placeholder="Enter email"
                value={newInputData.email}
                name="email"
                onChange={handleChange}
              />
              <TextField
                label="Mobile"
                placeholder="Enter Mobile"
                value={newInputData.mobile}
                name="mobile"
                onChange={handleChange}
              />
              <TextField
                label="Address"
                placeholder="Enter Address"
                value={newInputData.address}
                name="address"
                onChange={handleChange}
              />
              <TextField
                placeholder="Enter Balance"
                label="Balance"
                value={newInputData.balance}
                name="balance"
                onChange={handleChange}
              />
            </CardContent>
            <CardActions className="CardAction">
              <Button onClick={savedData}> Save</Button>
            </CardActions>
          </Card>
        </SwipeableDrawer>
      </div>
    </div>
  );
}

export default SwipeableEdgeDrawer;
