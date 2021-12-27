import { Typography } from "@mui/material";
import * as React from "react";
import TuningService from "../../../services/TuningService";
import classes from "./Fret.module.css";

export interface IFretProps {
  index: number;
  guitarStringIndex: number;
  isOpenNote?: boolean;
}

export default function Fret(props: IFretProps) {
  const noteName = TuningService.getNoteNameFromFret(
    props.guitarStringIndex,
    props.index
  );
  return (
    <div
      data-guitarstring-index={props.guitarStringIndex}
      data-fret-index={props.index}
    >
      <div
        className={`
          ${classes.fretContainer} 
          ${props.isOpenNote && classes.openNote}`}
      >
        <Typography component="span">{noteName}</Typography>
      </div>
      {!props.isOpenNote && <div className={classes.fret}></div>}
    </div>
  );
}
