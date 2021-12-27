import * as React from "react";
import { Slider } from "@mui/material";
import classes from "./NeckSlider.module.css";

export type NeckSliderOnChangeHandler = (value: number) => void;

export interface INeckSliderProps {
  onChange?: NeckSliderOnChangeHandler;
}

export default function NeckSlider(props: INeckSliderProps) {
  function handleChange(event: Event, newValue: number | number[]) {
    if (props.onChange != null) {
      props.onChange(newValue as number);
    }
  }
  return (
    <div className={classes.container}>
      <Slider onChange={handleChange} />
    </div>
  );
}
