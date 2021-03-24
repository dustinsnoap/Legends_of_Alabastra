//IMPORTS
import React, {Component} from 'react'

class PureCanvas extends Component {
    // This is to help separate animation updates from component updates
    // Returning false to shouldComponentUpdate stops the component from updating
    // However; it also prevents DidComponentUpdate from running;
    // which is responsible for drawing to the canvas
    // This also helps prevent stuttering.
    shouldComponentUpdate = () => false
    componentDidMount = () => {
        this.resize_canvas()
        window.addEventListener('resize', this.resize_canvas.bind(this))
    }
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.resize_canvas)
    }
    resize_canvas = () => {
        const canvas = document.querySelector(`.canvas > .${this.props.className}`)
        canvas.width = Math.ceil(240 * window.innerWidth/window.innerHeight)
        canvas.height = 240
    }
    handleChange = () => console.log('it changed!')
    render = () => 
        <canvas
            className={this.props.className}
            ref={
                node => node
                ? this.props.contextRef(node.getContext('2d'))
                : null}
        />
}

export default PureCanvas