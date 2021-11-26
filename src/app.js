var touchIndicator1 = document.getElementById("touchIndicator1");
var debugText = document.getElementById("debugText");

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchcancel', handleTouchCancel, false);
document.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(ev){
    //console.log("handleTouchStart", ev);
    for (let index = 0; index < ev.touches.length; index++) {
        const currentTouch = ev.touches[index];
        updateTouchIndicatorPosition(currentTouch.clientX,currentTouch.clientY)
        break;
    }
}

function handleTouchMove(ev){
    //console.log("handleTouchMove",ev);
    for (let index = 0; index < ev.touches.length; index++) {
        const currentTouch = ev.touches[index];
        updateTouchIndicatorPosition(currentTouch.clientX,currentTouch.clientY)
        break;
    }
}

function handleTouchCancel(ev){
    //console.log("handleTouchCancel",ev);
}

function handleTouchEnd(ev){
    //console.log("handleTouchCancel",ev);
}

function updateTouchIndicatorPosition(x,y){
    touchIndicator1.style.left = x + "px";
    touchIndicator1.style.top = y + "px";

    debugText.innerText = "x: " + x.toFixed(0) + " y: " + y.toFixed(0);
}