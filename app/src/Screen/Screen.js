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
    leave: this.props.leave,
    exitDirection: null,
    background: "#FEFEFE"
  }

  toggler = dir => {
    const { nextState } = this.props.data
    const screens = this.props.allData 
    const { change } = this.props
    setTimeout(() => {
      this.setState({
        background: this.props.data.pageColor,
        exitDirection: null
      })
    }, 300)
    change(dir)
    this.setState({
      exitDirection: dir
    })
  }

  render() {

    const { 
      clickHandler } = this.props

    const {
      title,
      subtitle,
      pageColor,
      linkColor,
      nextState
    } = this.props.data

    const { leave,
     exitDirection,
     background } = this.state

    const screenStyle = {
      backgroundColor: `${ background }`
    }

    return (
      // <CSSTransitionGroup
      //   transitionName='transition'
      //   transitionEnter={ leave }
      //   transitionEnterTimeout={ 500 }
      //   transitionAppear={ false }
      //   transitionAppearTimeout={ 500 }
      //   transitionLeaveTimeout={ 500 }
      //   transitionLeave={ leave }>
        <div id='screen'
          className={`exit-${ exitDirection }`} 
          style={ screenStyle }
          key={ 1 }>
          <Links colorset={ linkColor } />

          <Arrow direction='up' axis='y'
            toggler={ d => this.toggler(d) } 
            handler={ clickHandler }
            nextState={ nextState } />

          <MiddleRow>
            <Arrow direction='left'
              toggler={ d => this.toggler(d) } 
              axis='x' 
              handler={ clickHandler }
              nextState={ nextState } />


              <Container> 
                <ScreenMain title={ title }
                  subtitle={ subtitle } />
              </Container>
            
            <Arrow direction='right' 
              toggler={ d => this.toggler(d) } 
              axis='x' 
              handler={ clickHandler }
              nextState={ nextState } />
          </MiddleRow>

          <Arrow direction='down' 
            toggler={ d => this.toggler(d) } 
            axis='y' 
            handler={ clickHandler }
            nextState={ nextState } />

        </div>
      // </CSSTransitionGroup>     
    )

  }
  
}

export default Screen