import React from 'react'
import './Arrow.css'

export const Arrow = ({
  direction,
  axis,
  handler,
  nextState,
  toggler
}) => 
  <div className={ `${ axis }-styles` }
    onClick={ e => {
      toggler(direction)
      // handler(direction) } }>
    } }>
    {
      nextState[direction] ||
      nextState[direction] === 0 ? (
        <i className={ `fa fa-chevron-${ direction }` } 
          aria-hidden='true'></i>
      ) : null
    }
  </div>