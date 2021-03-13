//TOOL
const draw_tile = (tile, colors=['#fff'], w=8, h=8) => {
	const canvas = document.createElement("canvas")
	const ctx = canvas.getContext("2d")
	canvas.height = h
	canvas.width = w
	for (const [row_idx, row] of tile.entries()) {
		for (const [col_idx, col] of row.entries()) {
			if (col) {
				ctx.fillStyle = colors[col-1] //0's are transparent
				ctx.fillRect(col_idx, row_idx, 1, 1)
			}
		}
	}
	return ctx.canvas
}

//EXPORTS
export default draw_tile