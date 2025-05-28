import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, variant = 'primary', className = '' }) => {
  const baseStyle = 'px-6 py-3 rounded font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400';
  const variantStyle =
    variant === 'primary'
      ? 'bg-green-600 hover:bg-green-700 text-white'
      : 'bg-white text-green-700 border border-green-600 hover:bg-green-50';

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;