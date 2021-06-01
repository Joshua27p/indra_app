import React from 'react';
import './Welcome.scss';
import ProgressBar from '../../components/ProgressBar';
import CustomSelect from '../../components/CustomSelect';
import FindBrand from '../../components/FindBrand';
import AmountCounter from '../../components/AmountCounter';
import years from '../../constants/years.constant';
import carBrands from '../../constants/car-brands.constant'
import Button from 'src/components/Button';
import RadioInput from 'src/components/RadioInput';
import backICon from '../../assets/icons/back-icon.svg'

const Welcome = () => {
  const user = 'Juan'
  return (
    <div className="welcome-page">
      <div className="welcome-page__desktop-content">
        <div>
          <p><span>1</span>Datos del auto</p>
          <p><span>2</span>Arma tu plan</p>
        </div>
      </div>
      <div className="welcome-page__mobile-content">
        <div className="welcome-page__mobile-container">       
          <ProgressBar
            step="1"
          />
          <div className="welcome-page__back-container">
            <a className="welcome-page__back" href="/#"><img src={backICon} alt="back button" /></a>
            <p>Volver</p>
          </div>
          <div className="welcome-page__message">
            <p>¡Hola, <span> {user}!</span></p>
            <p>Completa los datos de tu auto</p>
          </div>
          <div className="welcome-page__search-container">
            <div>
              <CustomSelect 
                label="Año"
                options={years}
              />
              <CustomSelect 
                label="Modelo"
                options={carBrands}
              />
            </div>
          </div>
          <FindBrand />
          <RadioInput 
            text="¿Tu auto es a gas?"
          />
          <AmountCounter 
            text= "Indica la suma asegurada"
            min={12500}
            max={16500}
          />
          <Button 
            type='submit'
            label='Continuar'
            col="button__column-1"
            className="button__primary"
            arrow      
          />
        </div>
      </div> 
    </div>
  )
}

export default Welcome
