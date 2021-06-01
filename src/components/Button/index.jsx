import React from 'react';
import './Button.scss';
import rightArrowIcon from '../../assets/icons/right-arrow.svg'

const Button = ({label, type, className, arrow, col }) => {
  return (
    <div className={`button ${col}`}>
          <button 
          className={className} 
          type={type}
          >
            {label} 
            {arrow 
            && <img className="button__arrow" src={rightArrowIcon} 
               alt="right arrow"/> 
            }
          </button> 
    </div>
  )
}

export default Button
