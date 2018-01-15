import React, { Component } from 'react'
import Links from './Links'
import Arrow from './Arrow'
import MiddleRow from './MiddleRow'
import Container from './Container'
import ScreenMain from './ScreenMain'
import { CSSTransitionGroup } from 'react-transition-group'
import './Screen.css'

class Screen extends Component { 

  state = {
    exitDirection: '',
    background: "#FEFEFE",
    exit: false,
    content: {
      title: "Matt Carpowich",
      subtitle: "REACTJS"
    }
  }

  toggler = dir => {
    const { nextState } = this.props.data
    const screens = this.props.allData 
    const { change } = this.props
    change(dir)
    this.setState({
      exitDirection: dir,
      exit: true
    })
    setTimeout(() => {
      this.setState({
        background: this.props.data.pageColor,
        exitDirection: 'done',
        content: screens[nextState[dir]].content,
        exit: false
      })
    }, 300)
  }

  render() {

    const {
      title,
      subtitle,
      pageColor,
      linkColor,
      textColor,
      nextState
    } = this.props.data

    const { 
      exit,
      exitDirection,
      background,
      content } = this.state

    const screenStyle = {
      backgroundColor: `${ background }`
    }

    return (
      <div>

        <Links colorset={ linkColor } />

        <Arrow direction='up' axis='y'
          color={ linkColor }
          toggler={ d => this.toggler(d) } 
          nextState={ nextState } />

        <Arrow direction='left' axis='x'
          color={ linkColor }
          toggler={ d => this.toggler(d) }  
          nextState={ nextState } />

        <Arrow direction='right' axis='x'
          color={ linkColor } 
          toggler={ d => this.toggler(d) }  
          nextState={ nextState } />

        <Arrow direction='down' axis='y'
          color={ linkColor } 
          toggler={ d => this.toggler(d) }  
          nextState={ nextState } />

        <div id='screen'
          className={exitDirection != 'done' ?
            `exit-${ exitDirection }` : ''} 
          style={ screenStyle }
          key={ 1 }>

          <ScreenMain title={ content.title }
            subtitle={ content.subtitle }
            color={ textColor }
            exit={ exit }
            done={ this.state.exitDirection === 'done' ? true : false } />

          <MiddleRow>
              <Container>              
              </Container>  
          </MiddleRow>

        </div>   

      </div>
    )

  }
  
}

export default Screen