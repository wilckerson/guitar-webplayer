import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import Scale from "../components/Scale/Scale";
import TopBar from "../components/TopBar";
import AudioService from "../services/AudioService";
import TouchService from "../services/TouchService";

export default function WebPlayer() {
  const [debugText, setDebugText] = useState("Debug text");

  TouchService.setOnChangeListener((guitarStringIndex, fretIndex) => {
    console.log(`Str: ${guitarStringIndex} Frt: ${fretIndex}`);
    setDebugText(`Str: ${guitarStringIndex} Frt: ${fretIndex}`);

    //TuningService.getRatio(guitarStringIndex, fretIndex, AudioService)

    AudioService.playSoundNote();
  });

  return (
    <div
      onTouchStart={TouchService.handleTouch}
      onTouchMove={TouchService.handleTouch}
      onTouchEnd={TouchService.handleTouchEnd}
    >
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
