import React from 'react'
import SelectDocument from '../SelectDocument'
import './CaptationForm.scss'
import CustomInput from '../CustomInput'
import Button from '../Button'
import CheckBoxInput from '../CheckBoxInput'


const CaptationForm = () => {
  return (
    <div className="captation-form__container">
      <h2>Déjanos tus datos</h2>
      <form>
        <SelectDocument />
        <CustomInput
          type="number"
          name="phone"
          placeholder="Celular"
        />
        <CustomInput 
          type="number"
          name="plate"
          placeholder="Placa"
        />
        <CheckBoxInput 
          type="checkbox"
        />
        <Button 
          label="Cotízalo"
          className="button__primary"
        />
      </form>

    </div>
  )
}

export default CaptationForm
