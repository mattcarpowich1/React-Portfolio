import React from 'react'
import './Links.css'

export const Links = ({
  colorset,
  spin,
  spinDirection }) =>
  <div id='links'>
    <a href='https://github.com/mattcarpowich1'
      target='_blank'>
      <img id='git' 
        src={ `./images/github-${ colorset }.svg` } 
        className={ `${ spin ? 
          `spin-${ spinDirection }` : '' }` } />
    </a>
    <a href='https://github.com/mattcarpowich1'
      target='_blank'>
      <img id='linkedin' 
        src={`./images/linkedin-${ colorset }.svg`}
        className={ `${ spin ? 
          `spin-${ spinDirection }` : '' }` } />
    </a>
  </div>