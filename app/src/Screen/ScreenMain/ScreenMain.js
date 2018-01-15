import React from 'react'
import './ScreenMain.css'

export const ScreenMain = ({
  title,
  subtitle,
  color,
  exit,
  done
}) => 
  <div id='screen_main' 
    className={ done ? 'exit-done' : exit ? 'exit' : '' } 
    style={ { color: `${ color }` } }>
    <h1>{ title }</h1>
    <h4>{ subtitle }</h4>
  </div>