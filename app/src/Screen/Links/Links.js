import React from 'react'
import './Links.css'

export const Links = ({colorset}) =>
  <div>
    <a href='https://github.com/mattcarpowich1'
      target='_blank'>
      <img id='git' 
        src={`./images/github-${ colorset }.svg`} />
    </a>
    <a href='https://github.com/mattcarpowich1'
      target='_blank'>
      <img id='linkedin' 
        src={`./images/linkedin-${ colorset }.svg`} />
    </a>
  </div>