let canvas = document.querySelector('canvas')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

console.log(canvas)
const pen = canvas.getContext('2d')

class Circle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color
    this.setup()
  }

  setup = () => {
    pen.beginPath()
    pen.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    pen.fillStyle = this.color
    pen.strokeStyle = this.color
    pen.fill()
  }

  update = () => {
    if(this.x + this.radius > canvas.width || this.x)
    
    this.setup()

  }
}

const circle = new Circle(50, 50, 5, 5, 30, '#11ffaa')
