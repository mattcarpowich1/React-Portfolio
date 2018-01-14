import React, { Component } from 'react'
import ScreenData from './ScreenData'
import Screen from './Screen'
import './App.css'

class App extends Component {

  state = {
    screen: 0,
    data: ScreenData
  }

  render() {

    const { screen, data } = this.state

    return (
      <div>
        <Screen 
          data={ data[screen] }
        />
      </div>
    )

  }
}

export default App
