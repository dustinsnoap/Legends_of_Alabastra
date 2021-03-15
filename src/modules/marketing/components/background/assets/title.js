//TOOLS
import draw from '../../../../../tools/drawing'

//BITMAP
import {title as bitmap} from '../../../../../assets/bitmaps/title_screen'

//DRAW ASSET
const draw_title = (color='#ff0000') => draw.bitmap(bitmap, [color])

//EXPORT
export default draw_title