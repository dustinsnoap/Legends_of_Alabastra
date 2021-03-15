//TILESETS
import cloud_tileset from '../tilesets/title_screen/cloud'
import title_tileset from '../tilesets/title_screen/title'

//BITMAPS
export const cloud = {
        tileset: cloud_tileset,
        bitmap: [[0,1,2,3,4,0,0,0],[5,6,7,8,7,9,10,11]]
    }
export const title = {
    tileset: title_tileset,
    bitmap: [
        [1,2,0,0,0,0,0,0,0,3,0,0,0,0,4,0,0,5,6,7,0,8,9,0,0,0,0,0,0,0],
        [10,0,11,12,13,14,15,16,17,18,19,20,21,22,23,0,24,25,26,27,28,29,30,31,32,33,34,35,36,37],
        [38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,53,54,55,56,57,58,59,60,61,62,63,64,65,66],
        [0,0,0,67,68,69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
}