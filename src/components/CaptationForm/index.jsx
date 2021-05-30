import React from 'react'
import SelectDocument from '../SelectDocument'
import './CaptationForm.scss'
import PhoneInput from '../PhoneInput'
import PlateInput from '../PlateInput'
import Button from '../Button'
import CheckBoxInput from '../CheckBoxInput'


const CaptationForm = () => {
  return (
    <div className="captation-form__container">
      <h2>Déjanos tus datos</h2>
      <form>
        <SelectDocument />
        <PhoneInput
          type="number"
          name="phone"
          placeholder="Celular"
        />
        <PlateInput 
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
