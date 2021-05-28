import React from 'react';
import './PhoneInput.scss';

const PhoneInput = ({ type, name, placeholder }) => {
  return (
    <div className="phone-input">
      <div className="phone-input__container">
        <input type={type} name={name} placeholder={placeholder} />
      </div>
    </div>
  )
}

export default PhoneInput;
