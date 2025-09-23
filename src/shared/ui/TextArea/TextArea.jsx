import React from 'react'

function TextArea({ 
  placeholder, 
  value, 
  onChange, 
  disabled = false,
  error = false,
  rows = 4,
  className = '',
  ...props 
}) {
  const textareaClasses = `textarea ${error ? 'textarea-error' : ''} ${className}`

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
      className={textareaClasses}
      {...props}
    />
  )
}

export default TextArea
