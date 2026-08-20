import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Logo component for Stans Buildtech.
 * Renders the uploaded logo image (/logo.png) with a stylish vector fallback if image fails to load.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {!imgError ? (
        <img
          src="/logo.png"
          alt="Stans Buildtech - Evolving Lifestyle"
          className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        /* Vector Fallback matching brand hex codes: #10182B & #C0862D */
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-stans-navy to-stans-slate rounded-lg border border-stans-gold/30 shadow-md">
            <span className="font-serif font-bold text-stans-gold text-2xl tracking-tight">b</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-stans-gold rounded-full border-2 border-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-xl tracking-tight leading-none ${variant === 'light' ? 'text-white' : 'text-stans-navy'}`}>
              STANS <span className="text-stans-gold">BUILDTECH</span>
            </span>
            <span className={`text-[10px] tracking-widest uppercase font-medium mt-1 ${variant === 'light' ? 'text-stans-grey' : 'text-stans-slate/70'}`}>
              Evolving Lifestyle
            </span>
          </div>
        </div>
      )}
    </Link>
  );
}
