import React from 'react';
import './RadioInput.scss'

const RadioInput = ({type='radio', text}) => {
  return (
    <div className="radio-input">
      <p>{text}</p>
      <div className="radio-input__container">
        <label>
          <input type={type} name="selection"  value="yes"/>
          <p>Sí</p>
          <div className="radio-input__checked"></div>
        </label>
        <label>
          <input type={type}  name="selection" value="no"/>
          <p>No</p>
          <div className="radio-input__checked"></div>
        </label>
      </div>
    </div>
  )
}

export default RadioInput
