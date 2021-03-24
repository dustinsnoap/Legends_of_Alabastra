//DRAWING

//IMPORTS
import React, {Component} from 'react'

//COMPONENTS
import PureCanvas from '../../../../tools/pureCanvas'

//ASSETS
import background from './assets/background'

class Canvas extends Component {
    // This is to separate the animation from the drawing and maintain state.
    // Long story short it helps improve refresh rate and prevent stuttering.
    constructor(props) {
        super(props)
        this.saveContext = this.saveContext.bind(this)
        this.state = {}
    }
    set_resolution = () => {
        console.log('setting resolution for background...')
        this.setState({
            // sets up a squared pixel based on the height of the browser window
            // The NES had 240 vertical scan lines; pixel size is based on the screen height / 240
            resolution: {
                height: 240,
                width: Math.floor(window.innerWidth / (window.innerHeight / 240))
            }
        })
    }
    create_assets = () => {
        console.log('creating assets for background...')
        this.setState({
            assets: {
                background: background(['#64b9f9', '#215786'], Math.ceil(window.innerWidth / (window.innerHeight / 240))),
            }
        })
    }
    componentDidMount = () => {
        this.set_resolution()
        this.create_assets()
    }
    componentDidUpdate = () => {
        this.ctx.drawImage(this.state.assets.background, 0, 0)
    }
    saveContext = (ctx) => this.ctx = ctx
    render = () => {
        return <PureCanvas contextRef={this.saveContext} className='background'/>
    }
}

export default Canvas