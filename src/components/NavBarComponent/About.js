import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardComponent from "../../TESCOMPONENTS/materialCard";

export default function About() {
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
      <h4>About</h4>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={selectTab} centered>
          <Tab label="INFO" onClick={() => handleclick("INF")} value="1" />
          <Tab
            label="Frequentlt Asked"
            onClick={() => handleclick("FAQ")}
            value="2"
          />
          <Tab label="PRP" onClick={() => handleclick("PRP")} value="3" />
        </Tabs>
      </Box>
      <Box>{pageData[selectTab]}</Box>
    </div>
  );
}
