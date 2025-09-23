import React from 'react'

function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  disabled = false,
  error = false,
  className = '',
  ...props 
}) {
  const inputClasses = `input ${error ? 'input-error' : ''} ${className}`

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={inputClasses}
      {...props}
    />
  )
}

export default Input

