//IMPORTS
import React, {Component} from 'react'

class PureCanvas extends Component {
    // This is to help separate animation updates from component updates
    // Returning false to shouldComponentUpdate stops the component from updating
    // However; it also prevents DidComponentUpdate from running;
    // which is responsible for drawing to the canvas
    // This also helps prevent stuttering.
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate = () => false
    componentDidMount = () => {
        this.resize_canvas()
        window.addEventListener('resize', this.resize_canvas)
    }
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.resize_canvas)
    }
    resize_canvas = () => {
        const canvas = document.getElementsByClassName('background')[0]
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }
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