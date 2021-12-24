import * as React from "react";
import classes from "./SoundButton.module.css";

export interface ISoundButtonProps {
  children: React.ReactElement;
  guitarStringIndex: number;
  fretIndex: number;
}

export default function SoundButton(props: ISoundButtonProps) {
  return (
    <div
      data-guitarstring-index={props.guitarStringIndex}
      data-fret-index={props.fretIndex}
      className={classes.soundButton}
    >
      {props.children}
    </div>
  );
}
