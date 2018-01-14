import React from 'react'
import './Arrow.css'

export const Arrow = ({
  direction,
  axis
}) => 
  <div className={ `${ axis }-styles` }>
    <i className={ `fa fa-chevron-${ direction }` } 
      aria-hidden='true'></i>
  </div>