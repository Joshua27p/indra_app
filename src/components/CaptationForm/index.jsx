import React from 'react'
import SelectDocument from '../SelectDocument'
import './CaptationForm.scss'
import PhoneInput from '../PhoneInput'
import PlateInput from '../PlateInput'


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
      </form>

    </div>
  )
}

export default CaptationForm
