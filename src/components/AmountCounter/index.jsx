import React, { useState } from 'react'
import './AmountCounter.scss'

const AmountCounter = ({text, min, max, amount, currency='$'}) => {
  const [count, setCount] = useState(amount);
  if (count < min ) setCount(min)
  if (count > max ) setCount(max)


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
        <button onClick={() => count >= min && setCount(count - 100)}>-</button>
        <p><span>{currency}</span>{count}</p>
        <button onClick={() => count <= max && setCount(count + 100)}>+</button>
      </div>
    </div>
  )
}

export default AmountCounter
