//IMPORTS
import React from 'react'

//COMPONENTS
import BackGround from './background'
import Animation from './animation_layer'
import ForeGround from './foreground'

const Background = () => 
    <div className='canvas'>
        <BackGround className='background' />
        <Animation className='animation' />
        <ForeGround className='foreground' />
    </div>

export default Background