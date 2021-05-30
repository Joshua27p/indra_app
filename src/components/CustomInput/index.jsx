import React from 'react'
import './CustomInput.scss'

const CustonInput = ({name, type, placeholder}) => {
  return (
    <div className="custom-input">
      <div className="custom-input__container">
        <input name={name} type={type} placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default CustonInput
