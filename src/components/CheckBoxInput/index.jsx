import React from 'react';
import './CheckBoxInput.scss'

const CheckBoxInput = ({ type }) => {
  return (
    <div className="form-checkbox">
        <input className="form-checkbox__checkConditions" name="chkConditions" type={type} autocomplete="off" cheked/>
        <div className="check"></div>
          <span className="form-checkbox__terms">Acepto la <a href="/#">Política de protección de Datos Personales</a> y los  <a href="/#">Términos y condiciones</a></span>
    </div>
  )
}

export default CheckBoxInput
