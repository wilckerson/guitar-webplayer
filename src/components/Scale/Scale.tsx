import { Stack } from "@mui/material";
import GuitarStringContainer from "./GuitarStringContainer/GuitarStringContainer";
import classes from "./Scale.module.css";
import Config from "../../Config";
import TouchService from "../../services/TouchService";
import React from "react";

interface IScaleProps {
  scrollOffset: number;
}

export default React.forwardRef(function Scale(props: IScaleProps, ref) {
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
      style={{ marginTop: props.scrollOffset + "px" }}
      ref={ref}
    >
      {guitarStringsArray.map((item, index) => (
        <GuitarStringContainer key={"stringIdx" + index} index={index} />
      ))}
    </Stack>
  );
});
