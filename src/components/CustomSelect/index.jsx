import React from 'react'
import './CustomSelect.scss'

const CustomSelect = ({options=[], label}) => {
  return (
    <div className="custom-select">
      <label>{label}</label>
      <select className="custom-select__input">
        {options.map(o=> 
          <option value={o}>{o}</option>
        )}
      </select>
    </div>
  )
}

export default CustomSelect
