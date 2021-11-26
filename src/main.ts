import "./style.css";
var debugText = document.getElementById("debugText");
var touchIndicators = [
  document.getElementById("touchIndicator1"),
  document.getElementById("touchIndicator2"),
  document.getElementById("touchIndicator3"),
  document.getElementById("touchIndicator4"),
];

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
document.addEventListener("touchcancel", handleTouchCancel, false);
document.addEventListener("touchend", handleTouchEnd, false);

function handleTouchStart(ev: TouchEvent) {
  //console.log("handleTouchStart", ev);
  for (let index = 0; index < ev.touches.length; index++) {
    const currentTouch = ev.touches[index];
    updateTouchIndicatorPosition(
      index,
      currentTouch.clientX,
      currentTouch.clientY
    );
  }

  debugTouchIndicators();
}

function handleTouchMove(ev: TouchEvent) {
  //console.log("handleTouchMove",ev);
  for (let index = 0; index < ev.touches.length; index++) {
    const currentTouch = ev.touches[index];
    updateTouchIndicatorPosition(
      index,
      currentTouch.clientX,
      currentTouch.clientY
    );
  }

  debugTouchIndicators();
}

function handleTouchCancel(ev: TouchEvent) {
  //console.log("handleTouchCancel",ev);
}

function handleTouchEnd(ev: TouchEvent) {
  //console.log("handleTouchCancel",ev);
}

function updateTouchIndicatorPosition(index: number, x: number, y: number) {
  if (index >= touchIndicators.length) {
    return;
  }

  touchIndicators[index].style.left = x + "px";
  touchIndicators[index].style.top = y + "px";
}

function debugTouchIndicators() {
  if (!debugText) {
    return;
  }
  var debug = "";
  for (let index = 0; index < touchIndicators.length; index++) {
    const touchIndicator = touchIndicators[index];
    debug +=
      "x: " +
      parseInt(touchIndicator?.style.left || "0") +
      " y: " +
      parseInt(touchIndicator?.style.top || "0");
    debug += "<br/>";
  }

  debugText.innerHTML = debug;
}
