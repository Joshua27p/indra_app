import React from 'react'

const RadioInput = ({type, text}) => {
  return (
    <div>
      <p>{text}</p>
      <input type={type} />
      <label>sí</label>
      <input type={type} />
      <label>no</label>
    </div>
  )
}

export default RadioInput
