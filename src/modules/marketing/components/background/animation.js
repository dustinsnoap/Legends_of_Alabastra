//IMPORTS
import React, {Component} from 'react'

//COMPONENTS
import Canvas from './drawing'

class Animation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            settings: {
                start_time: Date.now(),
                fps: 30,
                canvas: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
                waves: {
                    amount: 50,
                    chance_of_ripple: .1,
                    speed: 10, //pixels per second
                    y_start: .5,
                    y_end: 1,
                    length: Math.floor(window.innerWidth / 5),
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
    //UTILS
    random_between = (min, max, precision=1) => Math.floor(Math.random() * (max * (1/precision) - min * (1/precision)) + min * (1/precision))/(1/precision)
    //DRAWING -- Initial object creation, size, position, etc.
    move_waves = () => {
        this.setState(prev => {
            prev.waves.map(wave => wave.x < window.innerWidth ? wave.x += wave.speed*(window.innerHeight/240)/prev.settings.fps : this.create_wave(wave))
            return {waves: prev.waves}
        })
    }
    create_wave = (wave={}) => {
        const settings = this.state.settings.waves
        const type = Math.random() < settings.chance_of_ripple ? 'ripple' : 'wave'
        const x = wave.x ? -Math.random() * window.innerWidth - settings.length : (Math.random()-.5) * window.innerWidth*2
        wave.type = type
        wave.x = x
        wave.y = this.random_between(settings.y_start, settings.y_end, .01)
        wave.color = 'red'
        wave.speed = settings.speed
        wave.length = type === 'ripple' ? Math.floor(settings.length/3) : settings.length
        return wave
    }
    create_waves = () => {
        let waves = []
        for(let num=0; num<this.state.settings.waves.amount; num++) waves.push(this.create_wave())
        this.setState({waves})
    }
    render = () => 
        <Canvas waves={this.state.waves} />
}

//EXPORTS
export default Animation