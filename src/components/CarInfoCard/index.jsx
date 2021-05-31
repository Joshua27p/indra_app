import React from 'react';
import './CarInfoCard.scss';
import userImg from '../../assets/images/coverage-user.svg'

const CarInfoCard = () => {
  return (
    <div className="carinfo">
      <div className="carinfo__content">
        <img  src={userImg} alt="user" />
        placa c2u 114
        <p>wolswage</p>
        <p>golf</p>
      </div>
    </div>
  )
}

export default CarInfoCard
