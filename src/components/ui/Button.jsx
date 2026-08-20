import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Luxury Button component supporting primary gold, dark navy, outlined, and text variants.
 */
export default function Button({
  children,
  to,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'white', 'text'
  size = 'md', // 'sm', 'md', 'lg'
  type = 'button',
  className = '',
  icon: Icon,
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stans-gold/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-stans-gold text-white hover:bg-stans-gold-hover shadow-gold-glow hover:shadow-lg active:scale-[0.98]',
    secondary: 'bg-stans-navy text-white hover:bg-stans-slate border border-stans-gold/20 shadow-md hover:border-stans-gold/40',
    outline: 'border-2 border-stans-gold text-stans-navy hover:bg-stans-gold hover:text-white',
    'outline-light': 'border-2 border-stans-gold text-white hover:bg-stans-gold hover:text-white',
    white: 'bg-white text-stans-navy hover:bg-stans-offwhite shadow-md hover:shadow-lg',
    text: 'text-stans-gold hover:text-stans-gold-hover underline-offset-4 hover:underline p-0'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs tracking-wider uppercase',
    md: 'px-5 py-2.5 text-sm tracking-wide',
    lg: 'px-7 py-3.5 text-base tracking-wide font-semibold'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${variant !== 'text' ? sizes[size] : ''} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon className={`ml-2 transition-transform group-hover:translate-x-1 ${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}`} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`group ${combinedClasses}`} {...props}>
      {content}
    </button>
  );
}
