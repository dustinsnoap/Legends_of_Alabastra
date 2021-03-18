//TOOLS
export const compress_tile = tile => tile.reduce((acc, row) => {
    //Convert that combined array into a 8bit number (0-256)
    //Add 20 to the number b/c the first 20 utf-8 numbers are controls
    //Convert that number into an utf-8 character
    //Add that character to a string
    //Return the string
    row = row.reduce((c,t) => c+t, '')
    row = parseInt(row, 2)+20
    row = String.fromCharCode(row)
    return acc+row
},'')

export const decompress_tileset = compress_tileset => {
    let tileset = []
    let tile = []
    Array.from(compress_tileset).forEach(char => {
        let binary = char.charCodeAt(0)-20
        binary = binary.toString(2)
        binary = [...'0'.repeat(8-binary.length)+binary]
        binary = binary.map(x => parseInt(x))
        tile.push(binary)
        if(tile.length === 8) {
            tileset.push(tile)
            tile = []
        }
    })
    return tileset
}

export const decompress_tileset2 = compressed_tileset => {
    let tileset = []
    let tile = []
    Array.from(compressed_tileset).forEach(char => {
        let binary = char.charCodeAt(0).toString(2)
        binary = [...'0'.repeat(16-binary.length)+binary].map(x => parseInt(x))
        tile.push(binary.splice(0,8))
        tile.push(binary.splice(-8))
        if(tile.length === 8) {
            tileset.push(tile)
            tile = []
        }
    })
    return tileset
}

export const compress_tileset = (tileset) => 
    tileset.reduce((acc, tile, i) => {
        return acc + compress_tile(tile)
    }, '')

//EXPORTS
const exports = {
    compress_tileset: compress_tileset,
    decompress_tileset: decompress_tileset
}

export default exports