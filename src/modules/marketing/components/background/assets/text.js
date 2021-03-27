//TOOLS
import createText from '../../../../../tools/create_string'
import draw from '../../../../../tools/drawing'

//DRAW ASSET
const draw_text = (text='enter text', color='#cccccc') => {
    const bitmap = createText(text)
    const canvas = draw.bitmap(bitmap, color)
    return canvas
}

//EXPORT
export default draw_text