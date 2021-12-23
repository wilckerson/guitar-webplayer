import * as React from "react";
import classes from "./SoundButton.module.css";

export interface ISoundButtonProps {
  children: React.ReactElement;
}

export default function SoundButton(props: ISoundButtonProps) {
  return <button className={classes.soundButton}>{props.children}</button>;
}
