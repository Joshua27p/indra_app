import React from 'react';
import { useFormContext } from 'react-hook-form';
import './SelectDocument.scss';

const SelectDocument = ({name}) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  
  return (
    <div className="select">
      <div className="select__container">
        <select >
          <option>DNI</option>
          <option>CE</option>
        </select>
        <input
          {...register(name)}
          name={name} p
          laceholder="Nro de documento"
        />
      </div>
      {name && errors[name] && (
        <div className="error-message">
          <p>{errors[name]?.message}</p>
        </div>
      )}
    </div>
  )
}

export default SelectDocument
