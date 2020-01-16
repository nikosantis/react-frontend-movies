import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Details } from './pages/Details'

import './App.css'
import 'bulma/css/bulma.css'

class App extends Component {

  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:movieId' component={Details} />
        </Switch>
      </div>
    )
  }
}

export default App
