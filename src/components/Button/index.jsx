import React from 'react';
import './Button.scss';
import rightArrowIcon from '../../assets/icons/right-arrow.svg'

const Button = ({label, type, className, arrow }) => {
  return (
    <div className="button">
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
