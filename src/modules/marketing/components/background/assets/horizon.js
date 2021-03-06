const horizon = (colors=[], w) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.height = colors.length*2
    canvas.width = w+10
    for(const [i,c] of colors.entries()) {
        ctx.fillStyle = c
        ctx.fillRect(0,i*2,w+10,2)
    }
    return ctx.canvas
}

export default horizon