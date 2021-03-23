//TOOLS
const get_pixels_per_char = base => {
	if(base === 2) return 8
    if(base < 13) return 4
    if(base < 180) return 2
    return 1
}

// export const compress_tile = tile => tile.reduce((acc, row) => {
//     //Convert that combined array into a 8bit number (0-256)
//     //Add 20 to the number b/c the first 20 utf-8 numbers are controls
//     //Convert that number into an utf-8 character
//     //Add that character to a string
//     //Return the string
//     row = row.reduce((c,t) => c+t, '')
//     row = parseInt(row, 2)+20
//     row = String.fromCharCode(row)
//     return acc+row
// },'')

export const compress_tile = (tile, base) => {
    // console.log('t0', tile)
    const pixels_per_char = get_pixels_per_char(base)
    let compressed_tile = ''
    for(let row of tile) {
        for(let i=0; i<8; i+= pixels_per_char) {
            let group = row.slice(i,i+pixels_per_char)
            group = group.reduce((c,t) => c+t, '')
            group = parseInt(group, base)+42
            group = String.fromCharCode(group)
            compressed_tile += group
        }
    }
    // console.log('t1', compressed_tile)
    return compressed_tile
}

export const decompress_tileset = (compressed_tileset, base) => {
    let tileset = []
    let tile = []
    let row = []
    const pixels_per_char = get_pixels_per_char(base)
    Array.from(compressed_tileset).forEach(char => {
        let group = char.charCodeAt(0)-42
        group = group.toString(base)
        group = [...'0'.repeat(pixels_per_char-group.length)+group]
        group = group.map(x => parseInt(x))
        row.push(...group)
        if(row.length === 8) {
            tile.push(row)
            row = []
        }
        if(tile.length === 8) {
            tileset.push(tile)
            tile = []
        }
    })
    return tileset
}

// export const decompress_tileset2 = compress_tileset => {
//     let tileset = []
//     let tile = []
//     Array.from(compress_tileset).forEach(char => {
//         let binary = char.charCodeAt(0)-20
//         binary = binary.toString(2)
//         binary = [...'0'.repeat(8-binary.length)+binary]
//         binary = binary.map(x => parseInt(x))
//         tile.push(binary)
//         if(tile.length === 8) {
//             tileset.push(tile)
//             tile = []
//         }
//     })
//     return tileset
// }

export const compress_tileset = (tileset, base) => {
    let compressed_tileset = tileset
    return compressed_tileset.reduce((acc, tile, i) => {
        return acc + compress_tile(tile, base)
    }, '')
}

//EXPORTS
const exports = {
    compress_tileset: compress_tileset,
    decompress_tileset: decompress_tileset
}

export default exports