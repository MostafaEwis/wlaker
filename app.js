let walker = document.getElementById("walker");
let speedInput = document.getElementById("speed");
let position = 0;
let speed = 1;
let refreshRate = 100;

speedInput.addEventListener("focusout", () => {
  speed = parseInt(speedInput.value);
});

setInterval(() => {
  if (position > 97 || position < 0) {
    speed = -speed;
  }
  position += speed;
  walker.style.top = `${position}%`;
}, 1000 / refreshRate);
