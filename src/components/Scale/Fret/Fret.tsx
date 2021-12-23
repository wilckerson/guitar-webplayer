import * as React from "react";
import SoundButton from "../../SoundButton/SoundButton";
import classes from "./Fret.module.css";

export interface IFretProps {
  index: number;
  guitarStringIndex: number;
  hideFretWire?: boolean;
}

export default function Fret(props: IFretProps) {
  return (
    <SoundButton>
      <>
        <div className={classes.fretContainer}>&nbsp;</div>
        {!props.hideFretWire && <div className={classes.fret}></div>}
      </>
    </SoundButton>
  );
}
