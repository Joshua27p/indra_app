import React from 'react'
import './SelectDocument.scss'

const SelectDocument = () => {
  return (
    <div className="select">
      <div className="select__container">
        <select>
          <option>DNI</option>
          <option>CE</option>
        </select>
        <input  name="document" placeholder="Nro de documento" />
      </div>
    </div>
  )
}

export default SelectDocument
