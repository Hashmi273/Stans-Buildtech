import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoAsset from '../../assets/logo.png';

/**
 * Reusable Logo component for Stans Buildtech.
 * Directly imports logo image asset so Vite resolves it properly across GitHub Pages & localhost.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {!imgError ? (
        <div className="bg-white/95 p-1.5 rounded-lg shadow-sm backdrop-blur-sm border border-stans-gold/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <img
            src={logoAsset}
            alt="Stans Buildtech — Evolving Lifestyle"
            className="h-9 md:h-11 w-auto object-contain"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        /* Styled fallback matching Cyan Blue logo block */
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-stans-gold to-stans-cyan rounded-lg border border-white/20 shadow-md">
            <span className="font-serif font-bold text-white text-2xl tracking-tight">b</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-300 rounded-full border-2 border-stans-navy animate-pulse" />
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
