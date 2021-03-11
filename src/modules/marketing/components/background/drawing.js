//IMPORTS
import React, {Component} from 'react'

//COMPONENTS
import PureCanvas from '../pureCanvas'

class Canvas extends Component {
    // This is to separate the animation from the drawing and maintain state.
    // Long story short it helps improve refresh rate and prevent stuttering.
    constructor(props) {
        super(props)
        this.saveContext = this.saveContext.bind(this)
        this.state = {}
    }
    componentDidMount = () => {
        console.log(window.innerHeight, Math.floor(window.innerHeight / 240))
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
    componentDidUpdate = () => {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        const res = this.state.resolution
        // all drawing goes here
        this.props.waves.forEach(wave => {
            this.ctx.fillStyle = wave.color
            this.ctx.fillRect(Math.round(wave.x), Math.round(wave.y*res.height*res.pixel_size), wave.length, res.pixel_size)
        })
    }
    saveContext = (ctx) => this.ctx = ctx
    render = () => {
        return <PureCanvas contextRef={this.saveContext} className='background'/>
    }
}

export default Canvas