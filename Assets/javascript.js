const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const circles = document.querySelectorAll(".circle");
let intervalID;

function switchColors() {
  intervalID = setInterval(() => {
    circles.forEach(circle => {
      const color = "#" + Math.floor(Math.random() * 1000000).toString(16);
      circle.style.backgroundColor = color;
    });
  }, 200);
}

startButton.addEventListener("click", switchColors);

stopButton.addEventListener("click", () => {
  clearInterval(intervalID);
  circles.forEach(circle =>{
  circle.style.backgroundColor = "transparent";
})
}, 500);