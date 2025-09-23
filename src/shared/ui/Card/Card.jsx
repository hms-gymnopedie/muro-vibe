import React from 'react'

function Card({ children, className = '', variant = 'default', ...props }) {
  const cardClasses = `card card-${variant} ${className}`

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  )
}

export default Card
