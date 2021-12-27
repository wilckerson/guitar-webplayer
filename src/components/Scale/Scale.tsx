import { Stack } from "@mui/material";
import GuitarStringContainer from "./GuitarStringContainer/GuitarStringContainer";
import classes from "./Scale.module.css";
import Config from "../../Config";
import TouchService, {
  TouchedNote,
  TouchServiceEvent,
} from "../../services/TouchService";
import TuningService from "../../services/TuningService";
import AudioService from "../../services/AudioService";
import { useEffect } from "react";
export default function Scale() {
  const guitarStringsArray = [...Array(Config.guitarStringsCount)];
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      spacing={0}
      className={classes.scale}
      onTouchStart={TouchService.handleTouch}
      onTouchMove={TouchService.handleTouch}
      onTouchEnd={TouchService.handleTouchEnd}
    >
      {guitarStringsArray.map((item, index) => (
        <GuitarStringContainer key={"stringIdx" + index} index={index} />
      ))}
    </Stack>
  );
}
