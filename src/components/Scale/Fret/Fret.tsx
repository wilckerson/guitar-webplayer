import { Typography } from "@mui/material";
import * as React from "react";
import HorizontalModeService from "../../../services/HorizontalModeService";
import TuningService from "../../../services/TuningService";
import classes from "./Fret.module.css";

export interface IFretProps {
  index: number;
  guitarStringIndex: number;
  isOpenNote?: boolean;
}

export default function Fret(props: IFretProps) {
  const isHorizontalMode = HorizontalModeService.isHorizontalMode();

  const noteName = TuningService.getNoteNameFromFret(
    props.guitarStringIndex,
    props.index
  );
  return (
    <div
      data-guitarstring-index={props.guitarStringIndex}
      data-fret-index={props.index}
      className={`
        ${classes.fretContainer}
        ${isHorizontalMode && classes.horizontal}`}
    >
      <div
        className={`
          ${classes.noteContainer}
          ${isHorizontalMode && classes.horizontal} 
          ${props.isOpenNote && classes.openNote}`}
      >
        <Typography component="span">{noteName}</Typography>
      </div>
      {!props.isOpenNote && (
        <div
          className={`
            ${classes.fret}
            ${isHorizontalMode && classes.horizontal}`}
        ></div>
      )}
    </div>
  );
}
