import React from 'react';
import './Button.scss';

const Button = ({label, type, className }) => {
  return (
    <div className="button">
          <button className={className} type={type}>{label}</button> 
    </div>
  )
}

export default Button
