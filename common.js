var isClockRunning = true;
// get elm
var secondElm = document.querySelector(".second-hand span");
var minuteElm = document.querySelector(".minute-hand span");
var hourElm = document.querySelector(".hour-hand span");

function animateClock() {
  if (isClockRunning) {
    // get date
    var now = new Date();

    var seconds = now.getSeconds();
    var secondsDegrees = (seconds / 60) * 360;

    var minute = now.getMinutes();
    var minuteDegrees = (minute / 60) * 360 + (seconds / 60) * 6;

    var hour = now.getHours();
    var hourDegrees = (hour / 12) * 360 + (minute / 60) * 30;

    // change style
    secondElm.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
    minuteElm.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    hourElm.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;

    // Gọi lại
    setTimeout(animateClock, 100);
  } else {
    return;
  }
}

animateClock();

// click stop clock
var btnElm = document.querySelector("button");
btnElm.onclick = function () {
  btnElm.classList.toggle("active");
  isClockRunning = !isClockRunning;
  animateClock();
};

// change position hand
let isMouseDown = false;
var startMouseX = 0;

minuteElm.onmousedown = function (e) {
  isMouseDown = true;
  startMouseX = e.clientY;
};

document.addEventListener("mousemove", function (e) {
  if (isClockRunning === false) {
    if (isMouseDown) {
      var currentMouseX = e.clientY;
      var degrees = ((currentMouseX - startMouseX) * 360) / window.innerWidth;

      degrees = (degrees + 360) % 360;

      minuteElm.style.transform = `translateX(-50%) rotate(${degrees}deg)`;
    }
  }
});

document.addEventListener("mouseup", function (e) {
  isMouseDown = false;
});
