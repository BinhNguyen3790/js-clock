function animateClock() {
  // get elm
  var secondElm = document.querySelector(".second-hand span");
  var minuteElm = document.querySelector(".minute-hand span");
  var hourElm = document.querySelector(".hour-hand span");

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
}

animateClock();
