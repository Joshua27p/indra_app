import React from 'react';
import './CarInfoCard.scss';
import userImg from '../../assets/images/coverage-user.svg'
import { useSelector } from 'react-redux';

const CarInfoCard = () => {
  const selectedInfo = useSelector(state=> state.selectedInfo)
  const plateSaved = useSelector(state => state.platesSaved)
  return (
    <div className="carinfo">
      <div className="carinfo__content">
        <img  src={userImg} alt="user" />
        <p>{plateSaved?.plate}</p>
        <p>{selectedInfo?.brand} {selectedInfo?.year}</p>
      </div>
    </div>
  )
}

export default CarInfoCard
