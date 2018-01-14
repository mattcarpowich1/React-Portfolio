import React from 'react'
import Links from './Links'
import Arrow from './Arrow'
import MiddleRow from './MiddleRow'
import Container from './Container'
import ScreenMain from './ScreenMain'
import './Screen.css'

const Screen = ({
 data,
 clickHandler 
}) => {

  const {
    title,
    subtitle,
    pageColor,
    linkColor,
    nextState
  } = data

  const screenStyle = {
    backgroundColor: `${pageColor}`
  }

  return (
    <div id='screen' 
      style={ screenStyle }>
      <Links colorset={ linkColor } />

      <Arrow direction='up' axis='y' 
        handler={ clickHandler }
        nextState={ nextState } />

      <MiddleRow>
        <Arrow direction='left'
          axis='x' handler={ clickHandler }
          nextState={ nextState } />

        <Container> 
          <ScreenMain title={ title }
            subtitle={ subtitle } />
        </Container>
        
        <Arrow direction='right' axis='x' 
          handler={ clickHandler }
          nextState={ nextState } />
      </MiddleRow>

      <Arrow direction='down' axis='y' 
        handler={ clickHandler }
        nextState={ nextState } />

    </div>
  )
  
}

export default Screen