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
                    amount: 40,
                    chance_of_ripple: .2,
                    speed: 30, //pixels per second
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
        const canvas_width = document.getElementsByClassName('background')[0].width
        const settings = this.state.settings
        this.setState(prev => {
            prev.waves.map(wave => wave.x < canvas_width ? wave.x += settings.waves.speed/settings.fps : this.create_wave(wave))
            return {waves: prev.waves}
        })
    }
    create_wave = (wave={}) => {
        const settings = this.state.settings.waves
        const {width, height} = document.getElementsByClassName('background')[0]
        wave.type = Math.random() < settings.chance_of_ripple ? 'ripple' : 'wave'
        wave.x = wave.x ? this.random_between(-width, -75) : this.random_between(-width, width)
        wave.y = this.random_between(Math.floor(height/2), height)
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