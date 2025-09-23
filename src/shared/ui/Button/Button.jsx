import React from 'react'

function Button({ children, onClick, variant = 'primary', size = 'medium', disabled = false, ...props }) {
  const baseClasses = 'btn'
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost'
  }
  const sizeClasses = {
    small: 'btn-sm',
    medium: 'btn-md',
    large: 'btn-lg'
  }

  const className = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'btn-disabled' : ''}`

  return (
    <button 
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

