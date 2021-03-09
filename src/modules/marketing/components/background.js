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
            className='background'
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
    componentDidUpdate = () => {
        // all drawing goes here
        const {waves} = this.props
        const wave = waves[0]
        // console.log('wave', wave)
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.ctx.fillStyle = wave.color
        this.ctx.fillRect(wave.x, wave.y, wave.length, 10)
    }
    saveContext = (ctx) => this.ctx = ctx
    render = () => {
        {console.log('canvas')}
        return <PureCanvas contextRef={this.saveContext} />
    }
}

class Animation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            settings: {
                start_time: Date.now(),
                fps: 60,
                canvas: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
                waves: {
                    amount: 10,
                    speed: 5,
                    speed_variance: .5,
                    y_start: .5,
                    y_end: 1,
                    colors:  ['#2d638f','#3c6d96','#4878a0','#5782a4'],
                },
            },
            waves: [],
        }
        this.updateAnimationState = this.updateAnimationState.bind(this)
    }
    //LIFECYCLE
    componentDidMount = () => {
        this.rAF = requestAnimationFrame(this.updateAnimationState)
        this.create_waves()
    }
    updateAnimationState = () => {
        let start_time = Date.now()
        const rAFCallback = () => {
                const now = Date.now()
                let elasped_time = now - start_time
                if(elasped_time > 1000 / this.state.settings.fps) {
                    start_time = now
                    this.move_waves()
                }
                requestAnimationFrame(rAFCallback)
            }
        rAFCallback()
    }
    componentWillUnmount = () => cancelAnimationFrame(this.rAF)
    //DRAWING -- Initial object creation, size, position, etc.
    move_waves = () => {
        this.setState(prev => {
            prev.waves[0].x++
            if(prev.waves[0].x > window.innerWidth) prev.waves[0].x = 0
            return {waves: prev.waves}
        })
    }
    create_waves = () => {
        console.log('waves created')
        let waves = []
        const wave = {
            x: 0,
            y: Math.floor(window.innerHeight / 2),
            color: '#5782a4',
            length: Math.floor(window.innerWidth/5)
        }
        waves.push(wave)
        this.setState({waves})
    }
    render = () => 
        <Canvas waves={this.state.waves} />
}

//EXPORTS
export default Animation