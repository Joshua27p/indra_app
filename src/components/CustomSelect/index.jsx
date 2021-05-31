import React from 'react'
import './CustomSelect.scss'

const CustomSelect = ({options=[], label}) => {
  return (
    <div className="custom-select">
      <label>{label}</label>
      <select>
        {options.map(o=> 
          <option value={o}>{o}</option>
        )}
      </select>
    </div>
  )
}

export default CustomSelect
