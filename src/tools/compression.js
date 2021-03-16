//TOOLS

const compress_tile = tile => tile.reduce((acc,_,i,arr) => {
    //Combine every two arrays
    //Convert that combined array into a 16bit number
    //Convert that number into an ascii character
    //Add that character to a string
    //Return the string
    if(i%2 === 0) return acc
    return acc + String.fromCharCode(parseInt(arr[i].concat(arr[i]).reduce((c,t) => c+t, ''), 2))
}, [])

const decompress_tileset = compressed_tileset => {
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

const compress_tileset = (tileset) => 
    tileset.reduce((acc, tile) => {
        return acc + compress_tile(tile)
    }, '')

//EXPORTS
const exports = {
    compress_tileset: compress_tileset,
    decompress_tileset: decompress_tileset
}

export default exports