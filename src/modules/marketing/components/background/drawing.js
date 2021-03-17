//IMPORTS
import React, {Component} from 'react'

//COMPONENTS
import PureCanvas from '../pureCanvas'

//ASSETS
import background from './assets/background'
import horizon from './assets/horizon'
import wave from './assets/wave'
import cloud from './assets/cloud'
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
        console.log('setting resolution...')
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
        console.log('creating assets...')
        this.setState({
            assets: {
                background: background(['#64b9f9', '#215786'], Math.ceil(window.innerWidth / (window.innerHeight / 240))),
                wave: wave(['#5881a5','#3b6d97','#4878a0','#3d6d95'], 4, 75),
                horizon: horizon(['#cce8fd', '#b1deff', '#97d2fe', '#61a6dd', '#5682a5', '#47799e', '#3c6d95', '#2d638f'], Math.ceil(window.innerWidth / (window.innerHeight / 240))),
                // cloud: cloud(['#ffffff']),
                title: title(['#8e6e00'])
            }
        })
    }
    componentDidMount = () => {
        this.set_resolution()
        this.create_assets()
    }
    componentDidUpdate = () => {
        this.ctx.drawImage(this.state.assets.background, 0, 0)
        // this.props.clouds.forEach(cloud => this.ctx.drawImage(this.state.assets.cloud, cloud.x, cloud.y))
        this.ctx.drawImage(this.state.assets.horizon,0,105)
        const title_x = Math.floor((this.state.resolution.width - this.state.assets.title.width) / 2)
        this.ctx.drawImage(this.state.assets.title, title_x, 30)
        this.props.waves.forEach(wave => this.ctx.drawImage(this.state.assets.wave,wave.x,wave.y))
    }
    saveContext = (ctx) => this.ctx = ctx
    render = () => {
        return <PureCanvas contextRef={this.saveContext} className='background'/>
    }
}

export default Canvas