var hourElm = document.querySelector(".hour-hand");
var minElm = document.querySelector(".min-hand");
var secondElm = document.querySelector(".second-hand");
function setDate() {
  var now = new Date();

  var seconds = now.getSeconds();
  var secondsDegrees = (seconds / 60) * 360 + 90;
  secondElm.style.transform = `rotate(${secondsDegrees}deg)`;

  var mins = now.getMinutes();
  var minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minElm.style.transform = `rotate(${minsDegrees}deg)`;

  var hour = now.getHours();
  var hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourElm.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
