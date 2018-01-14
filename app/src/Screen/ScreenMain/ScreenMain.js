import React from 'react'
import './ScreenMain.css'

export const ScreenMain = ({
  title,
  subtitle
}) => 
  <div id='screen_main'>
    <h1>{title}</h1>
    <h4>{subtitle}</h4>
  </div>