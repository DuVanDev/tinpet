import React from 'react'

const InputRadioWithLabel = ({
  defaultChecked,
  value,
  callbackClick,
  id,
  name,
  text,
  className,
}) => {
  return (
    <div className={className}>
      <input
        type="radio"
        name={name}
        defaultChecked={defaultChecked}
        value={value}
        id={id}
        onClick={callbackClick}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  )
}

export default InputRadioWithLabel
