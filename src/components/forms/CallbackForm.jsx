import React, { useState } from 'react';
import { PhoneCall, CheckCircle2, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';

/**
 * Quick Instant Callback Form for floating widget.
 */
export default function CallbackForm({ onSuccess }) {
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone || phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!consent) {
      setErrorMsg('Please accept communication consent.');
      return;
    }

    setIsSubmitting(true);
    const timestamp = new Date().toISOString();
    const payload = {
      phone,
      consentGivenAt: timestamp,
      type: 'Instant Callback Request'
    };

    setTimeout(() => {
      console.log('--- CALLBACK REQUEST ---', payload);
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess(payload);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-6 text-center space-y-3">
        <div className="w-12 h-12 bg-stans-gold text-white rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="font-serif text-xl font-bold text-stans-navy">Callback Requested!</h4>
        <p className="text-xs text-stans-slate leading-relaxed">
          Our sales executive will call you back on <strong>+91 {phone}</strong> within 15 minutes.
        </p>
        <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-stans-offwhite text-[10px] text-stans-slate rounded border">
          <ShieldCheck className="w-3 h-3 text-stans-gold" />
          <span>Consent Logged</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-1">
      <div className="text-center mb-4">
        <div className="w-10 h-10 bg-stans-gold/10 text-stans-gold rounded-full flex items-center justify-center mx-auto mb-2">
          <PhoneCall className="w-5 h-5" />
        </div>
        <h4 className="font-serif text-lg font-bold text-stans-navy">Instant Callback</h4>
        <p className="text-xs text-stans-slate/75">Enter your phone number and we will connect with you immediately.</p>
      </div>

      {errorMsg && (
        <div className="p-2 bg-rose-50 text-rose-700 text-xs rounded border border-rose-200">
          {errorMsg}
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-stans-navy mb-1 uppercase tracking-wider">
          Mobile Number <span className="text-stans-gold">*</span>
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 bg-stans-offwhite border border-r-0 border-stans-slate/20 rounded-l-md text-xs font-bold text-stans-navy">
            +91
          </span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="98200 12345"
            required
            className="w-full px-3 py-2 bg-stans-offwhite/50 border border-stans-slate/20 rounded-r-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold"
          />
        </div>
      </div>

      <label className="flex items-start gap-2 cursor-pointer pt-1">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-0.5 text-stans-gold accent-stans-gold"
        />
        <span className="text-[10px] text-stans-slate/80 leading-tight">
          I consent to receiving callback & WhatsApp updates from Stans Buildtech.
        </span>
      </label>

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={isSubmitting}
        className="w-full"
        icon={PhoneCall}
      >
        {isSubmitting ? 'Requesting...' : 'Call Me Back'}
      </Button>
    </form>
  );
}
