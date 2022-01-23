import Config from "../Config";
import mitt from "mitt";
import React from "react";

//type TouchServiceListener = ((note: TouchedNote) => void) | undefined;

export type TouchedNote = {
  guitarStringIndex: number;
  fretIndex: number;
};

export enum TouchServiceEvent {
  OnTouchNoteStart,
  OnTouchNoteEnd,
}

const emitter = mitt<Record<TouchServiceEvent, TouchedNote>>();

const lastTouchPositionsOnString: (number | undefined)[] = [];
const lastTouchedNotes: (TouchedNote | undefined)[] = [];

function isTouchStartOrEnoughDrag(
  minimumDragOnString: number,
  touchIdentifier: number,
  touchPosition: number
) {
  let isTouchStart = false;
  let isEnoughDragOnString = false;

  const lastTouchPositionOnString = lastTouchPositionsOnString[touchIdentifier];

  if (lastTouchPositionOnString !== undefined) {
    const draggedDistance = Math.abs(lastTouchPositionOnString - touchPosition);
    isEnoughDragOnString = draggedDistance > minimumDragOnString;
  } else {
    isTouchStart = true;
  }

  if (isTouchStart || isEnoughDragOnString) {
    lastTouchPositionsOnString[touchIdentifier] = touchPosition;
  }

  return isTouchStart || isEnoughDragOnString;
}

function getTouchedNoteFromPosition(x: number, y: number) {
  const touchedElement = document.elementFromPoint(x, y);
  if (touchedElement) {
    const guitarStringIndex = parseInt(
      touchedElement.getAttribute("data-guitarstring-index") || ""
    );
    const fretIndex = parseInt(
      touchedElement.getAttribute("data-fret-index") || ""
    );

    if (!isNaN(guitarStringIndex) && !isNaN(fretIndex)) {
      const touchedNote: TouchedNote = {
        guitarStringIndex: guitarStringIndex,
        fretIndex: fretIndex,
      };
      return touchedNote;
    }
  }

  return undefined;
}

function processTouchNoteStart(
  touchId: number,
  touchX: number,
  touchY: number
) {
  //TODO: Block beetwen strings motion (currently blocking a bit)

  const isNewTouch = isTouchStartOrEnoughDrag(
    Config.minimumDrag,
    touchId,
    touchY
  );

  if (isNewTouch == false) {
    return;
  }

  const touchedNote = getTouchedNoteFromPosition(touchX, touchY);
  if (!touchedNote) {
    return;
  }

  const lastTouchedNote = lastTouchedNotes[touchId];
  const currentNoteIsSameAsLastNote =
    lastTouchedNote &&
    lastTouchedNote.guitarStringIndex === touchedNote.guitarStringIndex &&
    lastTouchedNote.fretIndex === touchedNote.fretIndex;

  if (currentNoteIsSameAsLastNote) {
    return;
  }

  lastTouchedNotes[touchId] = touchedNote;

  emitter.emit(TouchServiceEvent.OnTouchNoteStart, touchedNote);
}

function processTouchNoteEnd(touchId: number) {
  lastTouchPositionsOnString[touchId] = undefined;

  const lastTouchedNote = lastTouchedNotes[touchId];

  if (lastTouchedNote) {
    emitter.emit(TouchServiceEvent.OnTouchNoteEnd, lastTouchedNote);
  }

  lastTouchedNotes[touchId] = undefined;
}

function handleTouch(touchEvent: React.TouchEvent) {
  for (let index = 0; index < touchEvent.touches.length; index++) {
    const currentTouch = touchEvent.touches[index];

    processTouchNoteStart(
      currentTouch.identifier,
      currentTouch.pageX,
      currentTouch.pageY
    );
  }
}

function handleTouchEnd(touchEvent: React.TouchEvent) {
  const currentTouch = touchEvent.changedTouches[0];
  processTouchNoteEnd(currentTouch.identifier);
}

let isMouseDown = false;
function handleMouseDown(mouseEvent: React.MouseEvent) {
  isMouseDown = true;
  processTouchNoteStart(0, mouseEvent.pageX, mouseEvent.pageY);
}

function handleMouseMove(mouseEvent: React.MouseEvent) {
  if (isMouseDown == false) {
    return;
  }
  processTouchNoteStart(0, mouseEvent.pageX, mouseEvent.pageY);
}

function handleMouseUp(mouseEvent: React.MouseEvent) {
  isMouseDown = false;
  processTouchNoteEnd(0);
}

export default {
  handleTouch,
  handleTouchEnd,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  addEventListener: emitter.on,
  removeEventListener: emitter.off,
};
