// Select
let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

// Time Clock

setInterval(() => {
  let currentTime = new Date();

  hour.innerHTML =
    currentTime.getHours() < 10
      ? `0${currentTime.getHours()}`
      : currentTime.getHours();

  min.innerHTML =
    currentTime.getMinutes() < 10
      ? `0${currentTime.getMinutes()}`
      : currentTime.getMinutes();

  sec.innerHTML =
    currentTime.getSeconds() < 10
      ? `0${currentTime.getSeconds()}`
      : currentTime.getSeconds();
}, 1000);
