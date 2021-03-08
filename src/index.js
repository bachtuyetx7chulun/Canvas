const Circle = require('./class/Circle')
const { getDistance } = require('./utils/index')

let canvas = document.querySelector('canvas')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
const pen = canvas.getContext('2d')
let circleArrays = []

let mouse = {
  x: undefined,
  y: undefined,
}

let colors = [
  '#11faa4',
  '#55ffaa',
  '#fcba03',
  '#fcba03',
  '#66ffee',
  '#22ffaa',
  '#11ffaa',
  '#99ffaa',
  '#44ffaa',
  '#ff22cc',
  '#cc77ff',
]

window.addEventListener('mousemove', e => {
  mouse.x = e.x
  mouse.y = e.y
})

init = () => {
  let x = Math.random() * canvas.width
  let y = Math.random() * canvas.height
  let dx = 1
  let dy = 1
  let radius = 50

  for (let i = 0; i < 5; i++) {
    if (i !== 0) {
      for (let j = 0; j < circleArrays.length; j++) {
        if (
          getDistance(x, y, circleArrays[j].x, circleArrays[j].y) <
          radius * 2
        ) {
          x = Math.random() * canvas.width
          y = Math.random() * canvas.height
          j = -1
        }
      }
    }

    circleArrays.push(
      new Circle(
        x,
        y,
        dx,
        dy,
        radius,
        colors[Math.ceil(Math.random() * colors.length)],
        pen,
        canvas.width,
        canvas.height,
        mouse
      )
    )
  }
}

function animate() {
  pen.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  circleArrays.map(circle => {
    circle.update(circleArrays)
  })
}

init()
animate()
