//IMPORTS
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

//ROUTER
import Router from './router'

//STYLE
import GlobalStyle from './style/global'

//APP
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router/>
  </React.StrictMode>,
  document.getElementsByTagName('app')[0]
)

serviceWorker.unregister()