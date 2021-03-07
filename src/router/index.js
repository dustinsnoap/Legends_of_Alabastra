//IMPORTS
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

//COMPONTENTS
import Marketing from '../modules/marketing'

const router = () =>
    <Router>
        {/* PUBLIC */}
        <Route path='/' exact component={Marketing} />
        {/* NAVIGATION */}
        {/* GAME */}
    </Router>

export default router