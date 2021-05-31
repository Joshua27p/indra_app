import React from 'react'
import './FindBrand.scss'
import iconCar from '../../assets/icons/icon_car.svg'


const FindBrand = () => {
  return (
    <div className="find-brand">
      <div className="find-brand__container">
        <img src={iconCar} alt="car icon" />
        <div className="find-brand__sub-content">
          <p>¿No encuentras el modelo?</p>
          <a href="/#">Click aquí</a>
        </div>
      </div>
    
    </div>
  )
}

export default FindBrand;
