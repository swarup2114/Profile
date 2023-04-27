import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardComponent from ".././TESCOMPONENTS/materialCard";

export default function SampleAbout() {
  const [selectTab, setSelectedTab] = useState("INF");

  const pageData = {
    INF: <CardComponent />,
    FAQ: "F and Q Tab",
    PRP: "Privacy and Policy Tab",
    TAC: "Terms and Conditions Tab",
  };
  function handleclick(tabType) {
    setSelectedTab(tabType);
  }
  return (
    <div>
      <h1>About</h1>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={selectTab} centered>
          <Tab label="INFo" onClick={() => handleclick("INF")} />
          <Tab label="Frequentlt Asked" onClick={() => handleclick("FAQ")} />
          <Tab label="PRP" onClick={() => handleclick("PRP")} />
        </Tabs>

        {pageData[selectTab]}
      </Box>
    </div>
  );
}
