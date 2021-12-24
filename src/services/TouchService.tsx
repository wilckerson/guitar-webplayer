import Config from "../Config";

type TouchServiceListener = ((note: TouchedNote) => void) | undefined;

type TouchedNote = {
  guitarStringIndex: number;
  fretIndex: number;
};

let onTouchNoteStart: TouchServiceListener = undefined;
let onTouchNoteEnd: TouchServiceListener = undefined;

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

function handleTouch(touchEvent: React.TouchEvent) {
  //TODO: Block beetwen strings motion (currently blocking a bit)

  for (let index = 0; index < touchEvent.touches.length; index++) {
    const currentTouch = touchEvent.touches[index];

    const isNewTouch = isTouchStartOrEnoughDrag(
      Config.minimumDrag,
      currentTouch.identifier,
      currentTouch.pageY
    );

    if (isNewTouch == false) {
      continue;
    }

    const touchedNote = getTouchedNoteFromPosition(
      currentTouch.pageX,
      currentTouch.pageY
    );
    if (!touchedNote) {
      continue;
    }

    const lastTouchedNote = lastTouchedNotes[currentTouch.identifier];
    const currentNoteIsSameAsLastNote =
      lastTouchedNote &&
      lastTouchedNote.guitarStringIndex === touchedNote.guitarStringIndex &&
      lastTouchedNote.fretIndex === touchedNote.fretIndex;

    if (currentNoteIsSameAsLastNote) {
      continue;
    }

    lastTouchedNotes[currentTouch.identifier] = touchedNote;

    if (onTouchNoteStart !== undefined) {
      onTouchNoteStart(touchedNote);
    }
  }
}

function handleTouchEnd(touchEvent: React.TouchEvent) {
  const currentTouch = touchEvent.changedTouches[0];
  lastTouchPositionsOnString[currentTouch.identifier] = undefined;

  const lastTouchedNote = lastTouchedNotes[currentTouch.identifier];

  if (lastTouchedNote && onTouchNoteEnd !== undefined) {
    onTouchNoteEnd(lastTouchedNote);
  }

  lastTouchedNotes[currentTouch.identifier] = undefined;
}

function setListeners(
  onTouchNoteStartListener: TouchServiceListener,
  onTouchNoteEndListener: TouchServiceListener
) {
  onTouchNoteStart = onTouchNoteStartListener;
  onTouchNoteEnd = onTouchNoteEndListener;
}

export default {
  handleTouch,
  handleTouchEnd,
  setListeners,
};
