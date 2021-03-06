//IMPORTS
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

//ROUTER
import Router from './router'

//STYLE
import GlobalStyle from './style/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <main className='app'>
      <Router/>
    </main>
  </React.StrictMode>,
  document.getElementsByTagName('body')[0]
)

serviceWorker.unregister()