import React from 'react';
import './RadioInput.scss'

const RadioInput = ({type='radio', text}) => {
  return (
    <div className="radio-input">
      <p>{text}</p>
      <input type={type} name="selection"  value="yes"/>
      <label>Sí</label>
      <input type={type}  name="selection" value="no"/>
      <label>No</label>
    </div>
  )
}

export default RadioInput
