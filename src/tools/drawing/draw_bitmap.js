//IMPORTS
import draw_tile from './draw_tile'

//TOOL
const draw_bitmap = (bitmap, colors=['#fff'], tile_w=8, tile_h=8) => {
	const canvas = document.createElement("canvas")
	const ctx = canvas.getContext("2d")
	canvas.height = bitmap.bitmap.length * tile_h
	canvas.width = bitmap.bitmap[0].length * tile_w

    const map = bitmap.bitmap
    const tileset = bitmap.tileset

	for (const [bit_row_idx, row] of map.entries()) {
		for (const [bit_col_idx, tile] of row.entries()) {
			if (tile) { // 0's are blank
				ctx.drawImage(
                    draw_tile(tileset[tile-1], colors, tile_w, tile_h),
                    bit_col_idx*tile_w,
                    bit_row_idx*tile_h)
			}
		}
	}

	return ctx.canvas
}

//EXPORTS
export default draw_bitmap