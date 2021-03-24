//DRAWING

//IMPORTS
import React, {Component} from 'react'

//COMPONENTS
import PureCanvas from '../../../../tools/pureCanvas'

//ASSETS
import horizon from './assets/horizon'
import title from './assets/title'

class Canvas extends Component {
    // This is to separate the animation from the drawing and maintain state.
    // Long story short it helps improve refresh rate and prevent stuttering.
    constructor(props) {
        super(props)
        this.saveContext = this.saveContext.bind(this)
        this.state = {}
    }
    set_resolution = () => {
        console.log('setting resolution for foreground...')
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
        console.log('creating assets for foreground...')
        this.setState({
            assets: {
                horizon: horizon(['#cce8fd', '#b1deff', '#97d2fe', '#61a6dd', '#5682a5', '#47799e', '#3c6d95', '#2d638f'], Math.ceil(window.innerWidth / (window.innerHeight / 240))),
                title: title(['#8e6e00'])
            }
        })
    }
    componentDidMount = () => {
        this.set_resolution()
        this.create_assets()
    }
    componentDidUpdate = () => {
        this.ctx.drawImage(this.state.assets.horizon,0,105)
        const title_x = Math.floor((this.state.resolution.width - this.state.assets.title.width) / 2)
        this.ctx.drawImage(this.state.assets.title, title_x, 30)
    }
    saveContext = (ctx) => this.ctx = ctx
    render = () => {
        return <PureCanvas contextRef={this.saveContext} className='foreground'/>
    }
}

export default Canvas