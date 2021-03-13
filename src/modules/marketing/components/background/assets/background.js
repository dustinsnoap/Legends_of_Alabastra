const background = (colors=[], w, h=240) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.height = h
    canvas.width = w
    ctx.fillStyle = colors[0]
    ctx.fillRect(0,0,w,Math.floor(h/2))
    ctx.fillStyle = colors[1]
    ctx.fillRect(0,Math.floor(h/2),w,Math.floor(h/2))
    return ctx.canvas
}

export default background