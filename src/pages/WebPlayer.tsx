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

  TouchService.setListeners(
    function onTouchNoteStart(note) {
      //console.log(`Str: ${guitarStringIndex} Frt: ${fretIndex}`);
      //setDebugText(`Str: ${guitarStringIndex} Frt: ${fretIndex}`);

      const ratio = TuningService.getRatioFromMainFrequency(
        note.guitarStringIndex,
        note.fretIndex,
        Config.audioSampleMainFrequency
      );

      AudioService.initAudioChannels(
        Config.guitarStringsCount,
        Config.audioSamplePath
      );
      AudioService.playSoundNote(ratio, note.guitarStringIndex);
    },
    function onTouchNoteEnd(note) {
      console.log("touchEnd", note.guitarStringIndex);
      AudioService.stopSoundNote(note.guitarStringIndex);
    }
  );

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
