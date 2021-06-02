import React from 'react'
import { useFormContext } from 'react-hook-form';
import './CustomSelect.scss'

const CustomSelect = ({ options=[], label, name }) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  return (
    <div className="custom-select">
      <label>{label}</label>
      <select
       {...register(name)}
       name={name}> 
        {options.map(o=> 
          <option value={o}>{o}</option>
        )}
      </select>
      {name && errors[name] && (
        <div className="error-message">
          <p>* {errors[name]?.message}</p>
        </div>
      )}
    </div>
  )
}

export default CustomSelect
