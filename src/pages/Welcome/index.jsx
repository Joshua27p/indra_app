import React from 'react';
import './Welcome.scss';
import ProgressBar from '../../components/ProgressBar';
import CustomSelect from '../../components/CustomSelect';
import FindBrand from '../../components/FindBrand';
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
    </div>
  )
}

export default Welcome
