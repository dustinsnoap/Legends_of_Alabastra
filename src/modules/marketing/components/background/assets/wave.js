const wave = (colors=[], h=2, w=20) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.height = h
    canvas.width = w
    ctx.fillStyle = colors[0]
    ctx.fillRect(Math.floor(2*w/5),0,Math.floor(w/5),Math.floor(h/2))
    ctx.fillStyle = colors[1]
    ctx.fillRect(0,Math.floor(h/2),Math.ceil(w/3),Math.floor(h/2))
    ctx.fillStyle = colors[2]
    ctx.fillRect(Math.floor(w/3),Math.floor(h/2),Math.ceil(w/3),Math.floor(h/2))
    ctx.fillStyle = colors[3]
    ctx.fillRect(Math.floor(2*w/3),Math.floor(h/2),Math.ceil(w/3),Math.floor(h/2))
    return ctx.canvas
}

export default wave