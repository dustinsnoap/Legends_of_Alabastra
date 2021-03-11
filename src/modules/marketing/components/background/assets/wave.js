
console.log('oof')

const wave = (px, colors=[], h, w) => {
    console.log(px, w)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.height = 2*h*px || 250
    canvas.width = w*px || 250
    ctx.fillStyle = colors[0]
    ctx.fillRect(Math.floor(2*w*px/5),0,Math.floor(w*px/5),Math.floor(h*px/2))
    ctx.fillStyle = colors[1]
    ctx.fillRect(0,Math.floor(h*px/2),Math.floor(w*px/3),Math.floor(h*px/2))
    ctx.fillStyle = colors[2]
    ctx.fillRect(Math.floor(w*px/3),Math.floor(h*px/2),Math.floor(w*px/3),Math.floor(h*px/2))
    ctx.fillStyle = colors[3]
    ctx.fillRect(Math.floor(2*w*px/3),Math.floor(h*px/2),Math.floor(w*px/3),Math.floor(h*px/2))
    return ctx.canvas
}

export default wave