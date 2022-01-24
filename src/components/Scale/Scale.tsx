import React from "react";
import { Stack } from "@mui/material";
import GuitarStringContainer from "./GuitarStringContainer/GuitarStringContainer";
import classes from "./Scale.module.css";
import Config, { cssVariablesConfig } from "../../Config";
import TouchService from "../../services/TouchService";
import Marker from "./Marker/Marker";
import TuningService from "../../services/TuningService";
import HorizontalModeService from "../../services/HorizontalModeService";

interface IScaleProps {
  scrollOffset: number;
}

export default React.forwardRef(function Scale(props: IScaleProps, ref) {
  const guitarStringsArray = [...Array(Config.guitarStringsCount)];
  const markers = TuningService.getMarkers();
  const isHorizontalMode = HorizontalModeService.isHorizontalMode();

  function getTotalScaleSize() {
    const fretSize = parseInt(cssVariablesConfig.fretSize.replace("px", ""));
    const openNoteSize = parseInt(
      cssVariablesConfig.openNoteSize.replace("px", "")
    );
    const fretWireSize = parseInt(
      cssVariablesConfig.fretWireSize.replace("px", "")
    );
    const nutSize = parseInt(cssVariablesConfig.nutSize.replace("px", ""));

    const totalScaleSize =
      openNoteSize +
      nutSize +
      (fretSize + fretWireSize) * Config.fretsPerString;
    return totalScaleSize;
  }

  return (
    <Stack
      direction={isHorizontalMode ? "column-reverse" : "row"}
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
      style={
        isHorizontalMode
          ? {
              marginLeft: props.scrollOffset + "px",
              width: getTotalScaleSize() + "px",
            }
          : { marginTop: props.scrollOffset + "px" }
      }
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
