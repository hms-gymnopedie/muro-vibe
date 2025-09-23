import React from 'react'
import { Helix } from 'ldrs/react'
import 'ldrs/react/Helix.css'

function LoadingSpinner({ size = 'medium', className = '' }) {
  const sizeMap = {
    small: '30',
    medium: '45',
    large: '60'
  }

  return (
    <div className={`loading-spinner ${className}`}>
      <Helix
        size={sizeMap[size]}
        speed="2.5"
        color="#667eea"
      />
    </div>
  )
}

export default LoadingSpinner
