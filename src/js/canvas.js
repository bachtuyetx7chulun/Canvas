let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

let pen = canvas.getContext("2d");
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

// TODO: Define move funtion
// var x = 200;
// var y = 50;
// var dx = Math.random() * 5;
// var dy = Math.random() * 5;
// var radius = 30;
// function animate() {
//   requestAnimationFrame(animate);
//   let circlePen = canvas.getContext("2d");
//   circlePen.clearRect(0, 0, innerWidth, innerHeight);
//   circlePen.beginPath();
//   circlePen.arc(x, y, 30, 0, Math.PI * 2, false);
//   circlePen.strokeStyle = "blue";
//   circlePen.stroke();
//   if (x > innerWidth - 30 || x < 30) dx = -dx;
//   if (y > innerHeight - radius || y < radius) dy = -dy;
//   x += dx;
//   y += dy;
// }

class Circle {
  constructor(x, y, dx, dy, radius, pen) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.pen = pen;
    this.draw();
  }

  draw = () => {
    this.pen.beginPath();
    this.pen.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.pen.strokeStyle = "green";
    this.pen.stroke();
  };

  move = () => {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
      this.dx = -this.dx;
    if (this.y + this.radius > innerWidth || this.y - this.radius < 0)
      this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

let circleArray = [];

for (let i = 0; i < 20; i++) {
  let x = Math.ceil(Math.random() * innerWidth);
  let y = Math.ceil(Math.random() * innerHeight);
  let dx = Math.random() * 0.5;
  let dy = Math.random() * 0.5;
  let radius = 20;

  let circle = new Circle(x, y, dx, dy, radius, pen);
  circleArray.unshift(circle);
}

function animate() {
  requestAnimationFrame(animate);
  pen.clearRect(0, 0, innerWidth, innerHeight);

  circleArray.forEach((circle) => {
    circle.move();
  });
}

animate();
