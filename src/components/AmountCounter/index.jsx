import React from 'react'
import './AmountCounter.scss'

const AmountCounter = ({text, min, max, amount=12500 , currency='$'}) => {
  return (
    <div className="amount-counter">
      <div>
        <p className="amount-counter__text">{text}</p>
        <div className="amount-counter__range-container">
          <p className="amount-counter__min-value">Min <span>{min}</span></p>
          <p className="amount-counter__max-value">Max <span>{max}</span></p>
        </div>
      </div>
      <div className="amount-counter__quantity-container">
        <button>-</button>
        <p><span>{currency}</span>{amount}</p>
        <button>+</button>
      </div>
    </div>
  )
}

export default AmountCounter
