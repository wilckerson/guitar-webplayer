import * as React from "react";
import SoundButton from "../../SoundButton/SoundButton";
import classes from "./Fret.module.css";

export interface IFretProps {
  index: number;
}

export default function Fret(props: IFretProps) {
  return (
    <SoundButton>
      <>
        <div className={classes.fretContainer}>&nbsp;</div>
        <div className={classes.fret}></div>
      </>
    </SoundButton>
  );
}
