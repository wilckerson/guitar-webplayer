import { useEffect, useRef, useState } from "react";
import HorizontalModeService from "../../../services/HorizontalModeService";
import TouchService, {
  TouchedNote,
  TouchServiceEvent,
} from "../../../services/TouchService";
import classes from "./GuitarString.module.css";

interface IGuitarStringProps {
  guitarStringIndex: number;
}
export default function GuitarString(props: IGuitarStringProps) {
  const guitarStringRef = useRef<null | HTMLDivElement>(null);
  const isHorizontalMode = HorizontalModeService.isHorizontalMode();

  useEffect(() => {
    TouchService.addEventListener(
      TouchServiceEvent.OnTouchNoteStart,
      onTouchNoteStart
    );

    return () => {
      TouchService.removeEventListener(
        TouchServiceEvent.OnTouchNoteStart,
        onTouchNoteStart
      );
    };
  }, []);

  function onTouchNoteStart(note: TouchedNote) {
    if (note.guitarStringIndex === props.guitarStringIndex) {
      playVibrationAnimation();
    }
  }

  function playVibrationAnimation() {
    if (guitarStringRef.current) {
      const vibrationAnim = isHorizontalMode
        ? classes.vibrationAnimHorizontal
        : classes.vibrationAnim;
      guitarStringRef.current.classList.remove(vibrationAnim);

      // triggering reflow to start the animation again from the begining
      void guitarStringRef.current.offsetWidth;

      guitarStringRef.current.classList.add(vibrationAnim);
    }
  }

  return (
    <div
      ref={guitarStringRef}
      className={`
        ${classes.guitarString}
        ${isHorizontalMode && classes.horizontal}`}
    ></div>
  );
}
