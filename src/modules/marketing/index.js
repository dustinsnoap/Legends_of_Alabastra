//IMPORTS
import React, {Component} from 'react'

//COMPONENTS
// import Background from './components/background'
import Background from './components/background/index'

//ASSETS

//STYLE
import Style from './style'

//MODULE
class StartScreen extends Component {
    componentDidMount = () => {
        document.addEventListener('keyup', action => this.keyup_actions(action))
    }
    componentWillUnmount = () => {
        document.removeEventListener('keyup', action => this.keyup_actions(action))
    }
    keyup_actions = (action) => {
        switch(action.key) {
            case 'Enter': this.next_page(); break
            default: break
        }
    }
    next_page = () => {
        this.props.history.push('/shipwright')
    }
    render = () => 
        <Style className='marketing'>
            <Background />
            <p>Marketing Page</p>
        </Style>
}

//EXPORTS
export default StartScreen