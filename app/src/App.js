import React, { Component } from 'react'
import ScreenData from './ScreenData'
import Screen from './Screen'
import './App.css'

class App extends Component {

  state = {
    screen: 4,
    data: ScreenData
  }

  changeScreen = direction => {
    const { screen } = this.state
    const { nextState } = this.state.data[screen]
    this.setState({
      screen: nextState[direction] ||
        nextState[direction] === 0 ?
        nextState[direction] : screen
    })
  }

  render() {

    const { screen, data } = this.state

    return <Screen 
            data={ data[screen] }
            clickHandler={ direction =>
              this.changeScreen(direction) } 
            />  

  }

}

export default App
