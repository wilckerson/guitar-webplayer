type TouchServiceOnChangeListener =
  | ((guitarStringIndex: number, fretIndex: number) => void)
  | undefined;
let onChangeListener: TouchServiceOnChangeListener = undefined;

const lastTouchPositionsOnString: (number | undefined)[] = [];
const MINIMUM_DRAG_ONSTRING = 30;

function isTouchStartOrEnoughDragOnString(
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

function getDataFromTouchPoint(x: number, y: number) {
  const touchedElement = document.elementFromPoint(x, y);
  if (touchedElement) {
    const guitarStringIndex = parseInt(
      touchedElement.getAttribute("data-guitarstring-index") || ""
    );
    const fretIndex = parseInt(
      touchedElement.getAttribute("data-fret-index") || ""
    );

    if (!isNaN(guitarStringIndex) && !isNaN(fretIndex)) {
      return [guitarStringIndex, fretIndex];
    }
  }

  return undefined;
}

function handleTouch(touchEvent: React.TouchEvent) {
  //TODO: Block beetwen strings motion (currently blocking a bit)

  for (let index = 0; index < touchEvent.touches.length; index++) {
    const currentTouch = touchEvent.touches[index];

    const isNewTouch = isTouchStartOrEnoughDragOnString(
      MINIMUM_DRAG_ONSTRING,
      currentTouch.identifier,
      currentTouch.pageY
    );

    if (isNewTouch == false) {
      continue;
    }

    const data = getDataFromTouchPoint(currentTouch.pageX, currentTouch.pageY);

    if (data && onChangeListener !== undefined) {
      onChangeListener(data[0], data[1]);
    }
  }
}

function handleTouchEnd(touchEvent: React.TouchEvent) {
  const currentTouch = touchEvent.changedTouches[0];
  lastTouchPositionsOnString[currentTouch.identifier] = undefined;
}

function setOnChangeListener(listener: TouchServiceOnChangeListener) {
  onChangeListener = listener;
}

export default {
  handleTouch,
  handleTouchEnd,
  setOnChangeListener,
};
