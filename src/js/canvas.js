let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let pen = canvas.getContext("2d");

console.log(canvas);

// TODO: Create new rectangle, it has a width of 100 and a height of 200
// pen.fillRect(0, 0, 100, 200);

// TODO: Draw a single line ~ it doesn't work
// pen.beginPath();
// pen.moveTo(100, 100);
// pen.moveTo(300, 300);
// pen.strokeStyle = "red";
// pen.stroke();

// TODO: Circle
//   let circlePen = canvas.getContext("2d");
//   let x = Math.random() * window.innerHeight;
//   let y = Math.random() * window.innerHeight;
//   circlePen.beginPath();
//   circlePen.arc(x, y, 25, 0, Math.PI * 2, false);
//   circlePen.strokeStyle = "blue";
//   circlePen.stroke();

var x = 200;
var y = 50;
var dx = Math.random() * 5;
var dy = Math.random() * 5;
var radius = 30;
function animate() {
  requestAnimationFrame(animate);
  let circlePen = canvas.getContext("2d");
  circlePen.clearRect(0, 0, innerWidth, innerHeight);
  circlePen.beginPath();
  circlePen.arc(x, y, 30, 0, Math.PI * 2, false);
  circlePen.strokeStyle = "blue";
  circlePen.stroke();
  if (x > innerWidth - 30 || x < 30) dx = -dx;
  if (y > innerHeight - radius || y < radius) dy = -dy;
  x += dx;
  y += dy;
}
