//IMPORTS
import React, {Component} from 'react'

//COMPONENTS
import PureCanvas from '../pureCanvas'

//ASSETS
import wave from './assets/wave'

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
                pixel_size: window.innerHeight / 240,
                height: 240,
                width: Math.floor(window.innerWidth / (window.innerHeight / 240))
            }
        })
    }
    create_assets = () => {
        console.log('creating assets...')
        const pixel_size = window.innerHeight / 240 //copied from set resolution
        this.setState({
            assets: {
                wave: wave(pixel_size, ['#5881a5','#3b6d97','#4878a0','#3d6d95'], 4, 75),
            }
        })
    }
    componentDidMount = () => {
        this.set_resolution()
        this.create_assets()
    }
    componentDidUpdate = () => {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        // this.ctx.drawImage(wave(this.state.resolution.pixel_size, ['red','green','purple','yellow'], 200), 0, 0)
        const res = this.state.resolution
        // all drawing goes here
        this.props.waves.forEach(wave => {
            this.ctx.drawImage(this.state.assets.wave, Math.floor(wave.x), Math.floor(wave.y*res.height*res.pixel_size))
            // this.ctx.fillStyle = wave.color
            // this.ctx.fillRect(Math.round(wave.x), Math.round(wave.y*res.height*res.pixel_size), wave.length, res.pixel_size)
        })
    }
    saveContext = (ctx) => this.ctx = ctx
    render = () => {
        return <PureCanvas contextRef={this.saveContext} className='background'/>
    }
}

export default Canvas