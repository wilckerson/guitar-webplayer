import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import Scale from "../components/Scale/Scale";
import TopBar from "../components/TopBar";

//Must be outside due to component re-rendering
const lastTouchPositionsOnString: (number | undefined)[] = [];
const minimumDragOnString = 30;

export default function WebPlayer() {
  const [debugText, setDebugText] = useState("Debug text");

  function handleTouch(touchEvent: React.TouchEvent) {
    //TODO: Block beetwen strings motion
    let tempDebugText = "";
    for (let index = 0; index < touchEvent.touches.length; index++) {
      const currentTouch = touchEvent.touches[index];

      let dragged = false;
      const lastTouchPositionOnString =
        lastTouchPositionsOnString[currentTouch.identifier];

      if (lastTouchPositionOnString === undefined) {
        dragged = true;
      } else {
        const draggedDistance = Math.abs(
          lastTouchPositionOnString - currentTouch.pageY
        );

        if (draggedDistance > minimumDragOnString) {
          dragged = true;
        }
      }

      if (dragged == false) {
        continue;
      }

      lastTouchPositionsOnString[currentTouch.identifier] = currentTouch.pageY;

      const touchedElement = document.elementFromPoint(
        currentTouch.pageX,
        currentTouch.pageY
      );
      if (touchedElement) {
        const guitarStringIndex = parseInt(
          touchedElement.getAttribute("data-guitarstring-index") || ""
        );
        const fretIndex = parseInt(
          touchedElement.getAttribute("data-fret-index") || ""
        );

        if (!isNaN(guitarStringIndex) && !isNaN(fretIndex)) {
          //console.log(`@Touched Str: ${guitarStringIndex} Frt: ${fretIndex}`);
          tempDebugText += `@TouchId ${
            currentTouch.identifier
          } Str: ${guitarStringIndex} Frt: ${fretIndex} ${new Date().getTime()} | `;
        }
      }
    }
    if (tempDebugText) {
      setDebugText(tempDebugText);
    }
    //console.log(tempDebugText);
    //setDebugText(lastTouchPositionsOnString.toString());
  }

  function handleTouchEnd(touchEvent: React.TouchEvent) {
    const currentTouch = touchEvent.changedTouches[0];
    lastTouchPositionsOnString[currentTouch.identifier] = undefined;
    //setDebugText(lastTouchPositionsOnString.toString());
  }

  return (
    <div
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      onTouchEnd={handleTouchEnd}
    >
      <Box sx={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <TopBar />
        <Container maxWidth="sm" sx={{ flexGrow: 1 }}>
          <Scale />
        </Container>
        <div>{debugText}</div>
      </Box>
    </div>
  );
}
