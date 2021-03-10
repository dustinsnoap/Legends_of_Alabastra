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
    }
    componentDidUpdate = () => {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        // all drawing goes here
        this.props.waves.forEach(wave => {
            this.ctx.fillStyle = wave.color
            this.ctx.fillRect(wave.x, wave.y, wave.length, 10)
        })
    }
    saveContext = (ctx) => this.ctx = ctx
    render = () =>
        <PureCanvas contextRef={this.saveContext} className='background'/>
}

export default Canvas