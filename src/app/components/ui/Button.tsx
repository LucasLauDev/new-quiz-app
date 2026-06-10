// Button component
'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button component with different variants and sizes
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  icon,
  className = '',
  type = 'button',
}) => {
  // Base classes
  const baseClasses = 'font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-md active:scale-[0.98] outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2';
  
  // Size classes
  const sizeClasses = {
    sm: 'text-xs py-2 px-4 rounded-lg',
    md: 'text-sm py-2.5 px-5 rounded-xl',
    lg: 'text-base py-3.5 px-7 rounded-2xl',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white focus-visible:ring-blue-500',
    secondary: 'bg-slate-700 hover:bg-slate-800 text-white focus-visible:ring-slate-600',
    outline: 'border border-slate-200 bg-white/60 backdrop-blur-xs hover:bg-slate-50 text-slate-700 hover:text-slate-900 focus-visible:ring-slate-300',
    danger: 'bg-linear-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white focus-visible:ring-rose-500',
  };
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-40 cursor-not-allowed active:scale-100 shadow-none hover:shadow-none' : '';
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${widthClasses} ${className}`}
    >
      {icon && <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};