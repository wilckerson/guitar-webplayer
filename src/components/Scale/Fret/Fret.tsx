import * as React from "react";
import classes from "./Fret.module.css";

export interface IFretProps {
  index: number;
  guitarStringIndex: number;
  isOpenNote?: boolean;
}

export default function Fret(props: IFretProps) {
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
        Info
      </div>
      {!props.isOpenNote && <div className={classes.fret}></div>}
    </div>
  );
}
