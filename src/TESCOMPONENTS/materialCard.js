import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import "../App.css";
import SwipeableEdgeDrawer from "../components/SidePopup";
import { useContext } from "react";
import { userContext } from "../App";

export default function CardComponent() {
  const [data] = useContext(userContext);
  const [open, setOpen] = useState(false);
  const handleOpen = (flag) => {
    setOpen(flag);
  };

  return (
    <div>
      <SwipeableEdgeDrawer isOpen={open} toggleDrawer={handleOpen} />
      <div className="cardList">
        <Card sx={{ minWidth: 275 }} className="cardItems">
          <CardContent>
            <Typography variant="h5" color="red" component="div">
              {"Contact"}
            </Typography>
            <Typography sx={{ fontSize: 22 }} color="black" gutterBottom>
              {"phone"} :{data.mobile}
            </Typography>
            <Typography sx={{ fontSize: 22 }} color="black" gutterBottom>
              {"Email"}:{data.email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button>
              <EditIcon onClick={() => handleOpen(true)} />
            </Button>
          </CardActions>
        </Card>

        <div>
          <Card sx={{ minWidth: 275 }} className="cardItems">
            <CardContent>
              <Typography variant="h5" color="red" component="div">
                {"Address"}
              </Typography>

              <Typography sx={{ fontSize: 22 }} color="black" gutterBottom>
                {"Address"} : {data.address}
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                <EditIcon onClick={() => handleOpen(true)} />
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Card sx={{ minWidth: 275 }} className="cardItems">
            <CardContent>
              <Typography variant="h5" color="red" component="div">
                {"Statement"}
              </Typography>
              <Typography sx={{ fontSize: 22 }} color="black" gutterBottom>
                {"user"}: {data.name}
              </Typography>
              <Typography sx={{ fontSize: 22 }} color="black" gutterBottom>
                {"balance"} :{data.balance}
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                <EditIcon onClick={() => handleOpen(true)} />
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
