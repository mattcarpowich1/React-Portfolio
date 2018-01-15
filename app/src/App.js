import React, { Component } from 'react'
import ScreenData from './ScreenData'
import Screen from './Screen'
import './App.css'

class App extends Component {

  state = {
    data: ScreenData,
    screen: 4,
    background: "#FEFEFE"
  }

  changeScreen = direction => {
    const { screen, data } = this.state
    const { nextState, pageColor } = this.state.data[screen]
    this.setState({
      screen: nextState[direction] ||
        nextState[direction] === 0 ?
        nextState[direction] : screen,
      background: data[nextState[direction]].pageColor
    })
  }

  render() {

    const { 
      data, 
      screen, 
      background,
      leave } = this.state

    const pageStyle = {
      backgroundColor: `${ background }`
    }

    return (
      <div style={ pageStyle }>
          <Screen 
            alldata={ data }
            data={ data[screen] }
            leave = { leave }
            change={ direction =>
              this.changeScreen(direction) } 
            />  
      </div>
    )
  }

}

export default App