//IMPORTS
import React, {Component} from 'react'

//COMPONENTS

//ASSETS

//SCRIPTS

//MODULES(?)

class PureCanvas extends Component {
    // This is to help separate animation updates from component updates
    // Returning false to shouldComponentUpdate stops the component from updating
    // However; it also prevents DidComponentUpdate from running;
    // which is responsible for drawing to the canvas
    // This also helps prevent stuttering.
    shouldComponentUpdate = () => false
    render = () =>
        <canvas
            width='300'
            height='300'
            ref={
                node => node
                ? this.props.contextRef(node.getContext('2d'))
                : null}
        />
}

class Canvas extends Component {
    // This is to separate the animation from the drawing and maintain state.
    // Long story short it helps improve refresh rate and prevent stuttering.
    constructor(props) {
        super(props)
        this.saveContext = this.saveContext.bind(this)
    }
    saveContext = (ctx) => this.ctx = ctx
    componentDidUpdate = () => {
        const {prop1, prop2, prop3} = this.props
        // all drawing goes here
    }
    render = () =>
        <PureCanvas contextRef={this.saveContext} />
}

class Animation extends Component {
    constructor(props) {
        super(props)
        this.state = {prop1: 0}
        this.updateAnimationState = this.updateAnimationState.bind(this)
    }
    componentDidMount = () => {
        this.rAF = requestAnimationFrame(this.updateAnimationState)
    }
    updateAnimationState = () => {
        this.setState(prev => ({prop1: prev.prop1+1}))
        this.rAF = requestAnimationFrame(this.updateAnimationState)
    }
    componentWillUnmount = () => cancelAnimationFrame(this.rAF)
    render = () =>
        <Canvas prop1={this.state.prop1} />

}

//EXPORTS
export default Animation