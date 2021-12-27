import { useEffect, useRef, useState } from "react";
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
      guitarStringRef.current.classList.remove(classes.vibrationAnim);

      // triggering reflow to start the animation again from the begining
      void guitarStringRef.current.offsetWidth;

      guitarStringRef.current.classList.add(classes.vibrationAnim);
    }
  }

  return <div ref={guitarStringRef} className={classes.guitarString}></div>;
}
