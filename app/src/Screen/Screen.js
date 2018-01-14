import React from 'react'
import Links from './Links'
import Arrow from './Arrow'
import MiddleRow from './MiddleRow'
import Container from './Container'
import ScreenMain from './ScreenMain'
import './Screen.css'

const Screen = ({ data }) => 
  <div id='screen'>
    <Links colorset={ data.linkColor } />

    <Arrow direction='up' axis='y' />

    <MiddleRow>
      <Arrow 
        direction='left'
        axis='x' />
      <Container>

        <ScreenMain title={ data.title }
          subtitle={ data.subtitle } />

      </Container>
      <Arrow 
        direction='right'
        axis='x' />
    </MiddleRow>

    <Arrow direction='down' axis='y' />
  </div>

export default Screen