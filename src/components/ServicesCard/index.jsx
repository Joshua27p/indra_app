import React from 'react'
import './ServicesCard.scss'

const ServicesCard = ({img, service, text, id, onChange, amount}) => {
  const handlechange = (e) => {
    e.target.checked ? onChange(amount) : onChange(-amount)
  }
  return (
    <div className="services-card">
       <div className="services-card__content">
        <div className="services-card__container">
          <div>
            <img src={img} alt={service} />
          </div>
          <div className="services-card__service-info">
            <p>{service}</p> 
            <div className="services-card__switch">
              <input onChange={handlechange} className="services-card__checkbox" type="checkbox" id={id} />
              <label className="services-card__switch-ball" for={id}></label>
            </div>
            <div className="services-card__text">
              <p>{text}</p>
            </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default ServicesCard
