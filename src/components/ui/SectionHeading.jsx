import React from 'react';

/**
 * Reusable SectionHeading component with eyebrow title, serif heading, and amber divider accent.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className = ''
}) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3 text-xs md:text-sm font-semibold uppercase tracking-widest ${light ? 'text-stans-gold' : 'text-stans-gold'}`}>
          <span className="w-6 h-[2px] bg-stans-gold" />
          <span>{eyebrow}</span>
          {centered && <span className="w-6 h-[2px] bg-stans-gold" />}
        </div>
      )}
      <h2 className={`text-2xl md:text-4xl font-serif font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-stans-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-sm md:text-base leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-stans-grey' : 'text-stans-slate/75'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
