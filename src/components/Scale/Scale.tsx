import React from "react";
import { Stack } from "@mui/material";
import GuitarStringContainer from "./GuitarStringContainer/GuitarStringContainer";
import classes from "./Scale.module.css";
import Config from "../../Config";
import TouchService from "../../services/TouchService";
import Marker from "./Marker/Marker";
import TuningService from "../../services/TuningService";

interface IScaleProps {
  scrollOffset: number;
}

export default React.forwardRef(function Scale(props: IScaleProps, ref) {
  const guitarStringsArray = [...Array(Config.guitarStringsCount)];
  const markers = TuningService.getMarkers();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      spacing={0}
      className={classes.scale}
      onMouseDown={TouchService.handleMouseDown}
      onMouseMove={TouchService.handleMouseMove}
      onMouseUp={TouchService.handleMouseUp}
      onTouchStart={TouchService.handleTouch}
      onTouchMove={TouchService.handleTouch}
      onTouchEnd={TouchService.handleTouchEnd}
      style={{ marginTop: props.scrollOffset + "px" }}
      ref={ref}
    >
      {markers.map((item, index) => (
        <Marker
          key={"marker" + index}
          fretIndex={item.fret}
          count={item.count}
        />
      ))}

      {guitarStringsArray.map((item, index) => (
        <GuitarStringContainer key={"stringIdx" + index} index={index} />
      ))}
    </Stack>
  );
});
