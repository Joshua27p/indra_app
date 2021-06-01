import React from 'react';
import './RadioInput.scss'

const RadioInput = ({type='radio', text}) => {
  return (
    <div className="radio-input">
      <p>{text}</p>
      <div className="radio-input__container">
        <div>
          <input type={type} name="selection"  value="yes"/>
          <label>Sí</label>
        </div>
        <div>
          <input type={type}  name="selection" value="no"/>
          <label>No</label>
        </div>
      </div>
    </div>
  )
}

export default RadioInput
