import React from 'react';
import './Welcome.scss';
import ProgressBar from '../../components/ProgressBar';
import CustomSelect from '../../components/CustomSelect';
import FindBrand from '../../components/FindBrand';
import RadioInput from '../../components/RadioInput';
import AmountCounter from '../../components/AmounCounter';
import years from '../../constants/years.constant';
import carBrands from '../../constants/car-brands.constant'

const Welcome = () => {
  const name = 'Juan'
  return (
    <div className="container">
      <ProgressBar />
      <div>
        <p>Hola <span> {name} </span> </p>
        <p>Completa los datos de tu auto</p>
      </div>
      <CustomSelect 
        label="Año"
        options={years}
      />
      <CustomSelect 
        label="Modelo"
        options={carBrands}
      />
      <FindBrand />
      <RadioInput 
        text="¿Tu auto es a gas?"
        type="radio"
      />
      <AmountCounter 
        text="Indica la suma  asegurada"
      />

    </div>
  )
}

export default Welcome
