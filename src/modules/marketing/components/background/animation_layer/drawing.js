//IMPORTS
import React, {Component} from 'react'

//COMPONENTS
import PureCanvas from '../../../../../tools/pureCanvas'

//ASSETS
import wave from '../assets/wave'
import cloud from '../assets/cloud'

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
                width: Math.ceil(window.innerWidth / (window.innerHeight / 240))
            }
        })
    }
    create_assets = () => {
        console.log('creating assets...')
        this.setState({
            assets: {
                wave: wave(['#5881a5','#3b6d97','#4878a0','#3d6d95']),
                cloud: cloud(['#ffffff']),
            }
        })
    }
    componentDidMount = () => {
        this.set_resolution()
        this.create_assets()
    }
    componentDidUpdate = () => {
        this.ctx.clearRect(0,0,this.state.resolution.width,this.state.resolution.height)
        this.props.clouds.forEach(cloud => this.ctx.drawImage(this.state.assets.cloud, cloud.x, cloud.y))
        this.props.waves.forEach(wave => this.ctx.drawImage(this.state.assets.wave,wave.x,wave.y))
    }
    saveContext = (ctx) => this.ctx = ctx
    render = () => {
        return <PureCanvas contextRef={this.saveContext} className='animation'/>
    }
}

export default Canvas