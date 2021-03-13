//TOOLS
import draw from '../../../../../tools/drawing'

//BITMAP
import {cloud as bitmap} from '../../../../../assets/bitmaps/title_screen'

//DRAW ASSET
const draw_cloud = (color='#cccccc') => draw.bitmap(bitmap, [color])

//EXPORT
export default draw_cloud