import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const PolygonButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = 'relative flex items-center font-medium text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantStyles = {
    primary: 'bg-[var(--primary-cama-black)]',
    secondary: 'bg-[var(--primary-cama-green)]'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
    >
      {/* Main button content with angled right edge */}
      <span 
        className={`${variantStyles[variant]} px-12 py-4 text-lg relative z-10 flex items-center justify-center min-w-[200px]`}
        style={{
          clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0 100%)'
        }}
      >
        {children}
      </span>
      
      {/* Angled accent piece */}
      <span 
        className="bg-[var(--primary-cama-forest)] absolute left-39 right-0 top-0 bottom-0 w-17"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 100%, 50px 100%)'
        }}
      />    
    </button>
  )
}

export default PolygonButton