const { getDistance, generateSpeed, resolveCollision } = require('../utils')

class Circle {
  constructor(
    x,
    y,
    dx,
    dy,
    radius,
    color,
    pen,
    canvasWidth,
    canvasHeight,
    mouse
  ) {
    this.x = x
    this.y = y
    this.dx = generateSpeed(dx)
    this.dy = generateSpeed(dy)
    this.radius = radius
    this.color = color
    this.pen = pen
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.mouse = mouse
    this.mass = 1
  }

  setup = () => {
    this.pen.beginPath()
    this.pen.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.pen.strokeStyle = this.color
    this.pen.stroke()
  }

  update = circles => {
    this.setup()
    for (let i = 0; i < circles.length; i++) {
      if (this !== circles[i]) {
        let space =
          getDistance(this.x, this.y, circles[i].x, circles[i].y) -
          this.radius * 2
        if (space < 0) {
          resolveCollision(this, circles[i])
        }
      }
    }

    if (this.x + this.radius > this.canvasWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }
    if (this.y + this.radius > this.canvasHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy
  }
}

module.exports = Circle
