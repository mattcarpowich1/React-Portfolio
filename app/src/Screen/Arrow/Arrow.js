import React from 'react'
import './Arrow.css'

export const Arrow = ({
  direction,
  axis,
  color,
  nextState,
  toggler
}) => 
  <div className={ `${ axis }-styles` }
    onClick={ e => {
      toggler(direction)
    } }>
    {
      nextState[direction] ||
      nextState[direction] === 0 ? (
        <i className={ 
          `fa fa-chevron-${ direction } 
          ${ direction } ${ color }`  } 
          aria-hidden='true'></i>
      ) : null
    }
  </div>