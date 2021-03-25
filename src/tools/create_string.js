//TILESET
import alphabet_tileset from '../assets/tilesets/alphabet'

//DICTIONARY
const char = {
    0: 0, A: 10, K: 20, U: 30, ".": 36,
    1: 1, B: 11, L: 21, V: 31, '"': 36,
    2: 2, C: 12, M: 22, W: 32, '?': 36,
    3: 3, D: 13, N: 23, X: 33, "-": 36,
    4: 4, E: 14, O: 24, Y: 34,
    5: 5, F: 15, P: 25, Z: 35,
    6: 6, G: 16, Q: 26, ",": 36,
    7: 7, H: 17, R: 27, "!": 37,
    8: 8, I: 18, S: 28, "'": 38,
    9: 9, J: 19, T: 29, "&": 39,
}

const fill_empty_space = bitmap => {
    let max_length = 0
    for(row of bitmap) if(row.length > max_length) max_length = row.length
    for(i=0; i<bitmap.length; i++) {
			if(bitmap[i].length < max_length)
            bitmap[i] = bitmap[i].concat(Array(max_length-bitmap[i].length).fill(0))
    }
    return bitmap
}

export const string_bitmap = string => {
    bitmap = []
    row = []
    for(c of string) {
        if(c === " ") row.push(0)
        else if(c === "/") {
            bitmap.push(row)
            row = []
        }
        else row.push(char[c.toUpperCase()]+1)
    }
    if(row.length) bitmap.push(row)
    bitmap = fill_empty_space(bitmap)
    return {
        tileset: alphabet_tileset,
        colors: 1,
        bitmap: bitmap
    }
}