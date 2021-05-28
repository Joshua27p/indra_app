import React from 'react'
import './PlateInput.scss'

const PlateInput = ({name, type, placeholder}) => {
  return (
    <div className="plate-input">
      <div className="plate-input__container">
        <input name={name} type={type} placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default PlateInput
