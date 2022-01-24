import { ClassNames } from "@emotion/react";
import { Stack } from "@mui/material";
import * as React from "react";
import { cssVariablesConfig } from "../../../Config";
import HorizontalModeService from "../../../services/HorizontalModeService";
import classes from "./Marker.module.css";

export interface IMarkerProps {
  count: number;
  fretIndex: number;
}

export default function Marker(props: IMarkerProps) {
  const markersArray = [...Array(props.count)];

  const fretSize = parseInt(cssVariablesConfig.fretSize.replace("px", ""));
  const openNoteSize = parseInt(
    cssVariablesConfig.openNoteSize.replace("px", "")
  );
  const fretWireSize = parseInt(
    cssVariablesConfig.fretWireSize.replace("px", "")
  );
  const nutSize = parseInt(cssVariablesConfig.nutSize.replace("px", ""));
  const markerSize = parseInt(cssVariablesConfig.markerSize.replace("px", ""));

  const position =
    openNoteSize +
    nutSize +
    (fretSize + fretWireSize) * (props.fretIndex - 1) +
    (fretSize + fretWireSize) / 2 -
    markerSize / 2;

  const isHorizontalMode = HorizontalModeService.isHorizontalMode();

  return (
    <Stack
      direction={isHorizontalMode ? "column" : "row"}
      justifyContent="space-around"
      alignItems="stretch"
      spacing={0}
      className={`
        ${classes.markerContainer}
        ${isHorizontalMode && classes.horizontal}`}
      style={
        isHorizontalMode ? { left: position + "px" } : { top: position + "px" }
      }
    >
      {markersArray.map((item, index) => (
        <div
          key={"marker" + props.fretIndex + "-" + index}
          className={classes.marker}
        >
          &nbsp;
        </div>
      ))}
    </Stack>
  );
}
