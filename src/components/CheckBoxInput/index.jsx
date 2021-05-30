import React from 'react';
import './CheckBoxInput.scss'

const CheckBoxInput = ({ type}) => {
  return (
    <div className="form-checkbox">
      <label className="form-checkbox__container">
        <input className="form-checkbox__check" type={type} />
        <span className="form-checkbox__terms">Acepto la <a href="/#">Política de protección de Datos Personales</a> y los  <a href="/#">Términos y condiciones</a></span>
      </label>
    </div>
  )
}

export default CheckBoxInput
