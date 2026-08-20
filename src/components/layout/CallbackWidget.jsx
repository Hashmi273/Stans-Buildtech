import React, { useState } from 'react';
import { PhoneCall, MessageSquare, X } from 'lucide-react';
import Modal from '../ui/Modal';
import CallbackForm from '../forms/CallbackForm';

/**
 * Sticky Instant Callback & Live Chat Floating Widget.
 * Positioned fixed in bottom right corner.
 */
export default function CallbackWidget() {
  const [modalOpen, setModalOpen] = useState(false);
  const [chatNoticeOpen, setChatNoticeOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Live Chat Notification Popup */}
        {chatNoticeOpen && (
          <div className="bg-stans-navy text-white p-4 rounded-xl shadow-2xl border border-stans-gold/30 w-64 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-stans-gold uppercase tracking-wider flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Live Chat Support
              </span>
              <button onClick={() => setChatNoticeOpen(false)} className="text-stans-grey hover:text-white">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-stans-grey mb-3 leading-relaxed">
              Our real estate advisor is online! Start a live conversation for instant project brochures.
            </p>
            <button
              onClick={() => {
                setChatNoticeOpen(false);
                setModalOpen(true);
              }}
              className="w-full py-1.5 bg-stans-gold hover:bg-stans-gold-hover text-white text-xs font-semibold rounded transition-colors"
            >
              Start Chat / Callback
            </button>
          </div>
        )}

        {/* Live Chat Button Placeholder */}
        <button
          onClick={() => setChatNoticeOpen(!chatNoticeOpen)}
          className="w-12 h-12 rounded-full bg-stans-slate text-white shadow-xl hover:bg-stans-navy border border-stans-gold/40 flex items-center justify-center transition-all duration-300 hover:scale-105 group relative"
          aria-label="Live Chat"
          title="Live Chat Placeholder"
        >
          <MessageSquare className="w-5 h-5 text-stans-gold group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-stans-navy" />
        </button>

        {/* Instant Callback Sticky Floating CTA Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-stans-gold to-stans-gold-hover text-white font-semibold text-xs md:text-sm tracking-wide rounded-full shadow-gold-glow hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20 group"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <PhoneCall className="w-3.5 h-3.5 text-white animate-bounce" />
          </div>
          <span>Instant Callback</span>
        </button>
      </div>

      {/* Instant Callback Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        maxWidth="max-w-md"
        title="Request Instant Callback"
      >
        <CallbackForm onSuccess={() => setTimeout(() => setModalOpen(false), 3000)} />
      </Modal>
    </>
  );
}
