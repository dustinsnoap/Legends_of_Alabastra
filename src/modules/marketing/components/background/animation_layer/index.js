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
                clouds: {
                    amount: 10,
                    speed: 5,
                    y_start: 0,
                    y_end: .4
                },
                waves: {
                    amount: 40,
                    chance_of_ripple: .2,
                    speed: 10, //pixels per second
                    y_start: .5,
                    y_end: 1,
                    length: Math.floor(window.innerWidth / 5),
                    colors:  ['#2d638f','#3c6d96','#4878a0','#5782a4'],
                },
            },
            waves: [],
            clouds: [],
        }
        this.updateAnimationState = this.updateAnimationState.bind(this)
    }
    //LIFECYCLE
    componentDidMount = () => {
        this.rAF = requestAnimationFrame(this.updateAnimationState)
        this.create_clouds()
        this.create_waves()
    }
    updateAnimationState = () => {
        let start_time = Date.now()
        const rAFCallback = () => {
                const now = Date.now()
                let elasped_time = now - start_time
                if(elasped_time > 1000 / this.state.settings.fps) {
                    start_time = now
                    this.move_clouds()
                    this.move_waves()
                }
                requestAnimationFrame(rAFCallback)
            }
        rAFCallback()
    }
    componentWillUnmount = () => {
        console.log('caneling...')
        cancelAnimationFrame(this.rAF)
    }
    //UTILS
    random_between = (min, max, precision=1) => Math.floor(Math.random() * (max * (1/precision) - min * (1/precision)) + min * (1/precision))/(1/precision)
    //DRAWING -- Initial object creation, size, position, etc.
    move_waves = () => {
        const canvas = document.getElementsByClassName('background')[0]
        if(!canvas) return
        const canvas_width = canvas.width
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
    move_clouds = () => {
        const canvas = document.getElementsByClassName('background')[0]
        if(!canvas) return
        const canvas_width = canvas.width
        const settings = this.state.settings
        this.setState(prev => {
            prev.clouds.map(cloud => cloud.x < canvas_width ? cloud.x += settings.clouds.speed/settings.fps : this.create_cloud(cloud))
            return {clouds: prev.clouds}
        })
    }
    create_waves = () => {
        let waves = []
        for(let num=0; num<this.state.settings.waves.amount; num++) waves.push(this.create_wave())
        this.setState({waves})
    }
    create_cloud = (cloud={}) => {
        const settings = this.state.settings.clouds
        const {width, height} = document.getElementsByClassName('background')[0]
        cloud.x = cloud.x ? this.random_between(-width, -100) : this.random_between(-width, width)
        cloud.y = this.random_between(Math.floor(height*settings.y_start), Math.floor(height*settings.y_end))
        return cloud
    }
    create_clouds = () => {
        let clouds = []
        for(let num=0; num<this.state.settings.clouds.amount; num++) clouds.push(this.create_cloud())
        this.setState({clouds})
    }
    render = () =>
        <Canvas clouds={this.state.clouds} waves={this.state.waves} />
}

//EXPORTS
export default Animation