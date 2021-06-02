import React from 'react'
import { useFormContext } from 'react-hook-form';
import './CustomInput.scss'

const CustonInput = ({name, type, placeholder}) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  
  return (
    <div className="custom-input">
      <div className="custom-input__container">
        <input 
        {...register(name)}
        name={name} 
        type={type} 
        placeholder={placeholder}/>
      </div>
      {name && errors[name] && (
        <div className="error-message">
          <p>* {errors[name]?.message}</p>
        </div>
      )}
    </div>
  )
}

export default CustonInput
