import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * Reusable Modal Overlay component for forms, lightboxes, and quick dialogues.
 */
export default function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-xl' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stans-navy/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className={`relative w-full ${maxWidth} bg-white rounded-2xl shadow-2xl overflow-hidden border border-stans-gold/20 z-10 transition-all transform animate-in fade-in zoom-in-95 duration-200 my-8`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-stans-navy text-white border-b border-stans-gold/20">
          <h3 className="font-serif text-lg md:text-xl font-bold text-white tracking-wide">
            {title || 'Enquiry & Callback'}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stans-grey hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
