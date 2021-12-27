import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import Scale from "../components/Scale/Scale";
import TopBar from "../components/TopBar";
import Config from "../Config";
import AudioService from "../services/AudioService";
import TouchService from "../services/TouchService";
import TuningService from "../services/TuningService";

export default function WebPlayer() {
  const [debugText, setDebugText] = useState("Debug text");

  return (
    <div>
      <Box sx={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <TopBar />
        <Container maxWidth="sm" sx={{ flexGrow: 1 }}>
          <Scale />
        </Container>
        <div>{debugText}</div>
      </Box>
    </div>
  );
}
