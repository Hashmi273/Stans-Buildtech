import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { projectsData } from '../../data/projects';
import Button from '../ui/Button';

/**
 * TRAI / DLT Compliant Lead Enquiry Form.
 * Captures user contact details, pre-selected project of interest, and exact consent timestamp (consentGivenAt).
 */
export default function EnquiryForm({
  defaultProject = '',
  onSuccess,
  compact = false,
  title = 'Schedule a Site Visit or Request Brochure'
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    project: defaultProject || '',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionDetails, setSubmissionDetails] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.consent) {
      setErrorMsg('Please accept the DLT/TRAI consent checkbox to proceed.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call with ISO timestamp generation
    const consentTimestamp = new Date().toISOString();
    const payload = {
      ...formData,
      consentGivenAt: consentTimestamp,
      sourceUrl: window.location.href
    };

    setTimeout(() => {
      console.log('--- ENQUIRY SUBMISSION PAYLOAD ---', payload);
      setIsSubmitting(false);
      setSubmitted(true);
      setSubmissionDetails({
        timestamp: consentTimestamp,
        name: formData.fullName
      });
      if (onSuccess) onSuccess(payload);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-stans-gold-light p-8 rounded-xl border border-stans-gold/30 text-center animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-stans-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold-glow">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="font-serif text-2xl font-bold text-stans-navy mb-2">
          Thank You, {submissionDetails?.name}!
        </h4>
        <p className="text-sm text-stans-slate mb-4 leading-relaxed">
          Your enquiry has been registered successfully. Our property advisor will reach out to you shortly with project brochures and pricing options.
        </p>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md text-[11px] text-stans-slate/80 font-mono border border-stans-gold/20">
          <ShieldCheck className="w-3.5 h-3.5 text-stans-gold" />
          <span>Consent Logged: {new Date(submissionDetails?.timestamp).toLocaleString()}</span>
        </div>

        <div className="mt-6">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                project: '',
                message: '',
                consent: false
              });
            }}
            className="text-xs font-semibold text-stans-gold hover:underline uppercase tracking-wider"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && !compact && (
        <div className="mb-2">
          <h3 className="font-serif text-xl font-bold text-stans-navy">{title}</h3>
          <p className="text-xs text-stans-slate/70">Fill out your details below and our team will connect within 2 hours.</p>
        </div>
      )}

      {errorMsg && (
        <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-md">
          {errorMsg}
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
          Full Name <span className="text-stans-gold">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Rahul Sharma"
          required
          className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold focus:ring-1 focus:ring-stans-gold transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
            Mobile Number <span className="text-stans-gold">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-stans-offwhite border border-r-0 border-stans-slate/20 rounded-l-md text-xs font-semibold text-stans-slate">
              +91
            </span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="98200 12345"
              required
              className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-r-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold focus:ring-1 focus:ring-stans-gold transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
            Email Address <span className="text-stans-gold">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rahul@example.com"
            required
            className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold focus:ring-1 focus:ring-stans-gold transition-colors"
          />
        </div>
      </div>

      {/* Project Dropdown */}
      <div>
        <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
          Project of Interest
        </label>
        <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold focus:ring-1 focus:ring-stans-gold transition-colors"
        >
          <option value="">Select a Project (Optional)</option>
          <optgroup label="Residential — Ongoing">
            {projectsData
              .filter((p) => p.status === 'ongoing')
              .map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name} ({p.location})
                </option>
              ))}
          </optgroup>
          <optgroup label="Residential — Ready to Move">
            {projectsData
              .filter((p) => p.status === 'ready')
              .map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name} ({p.location})
                </option>
              ))}
          </optgroup>
          <optgroup label="Residential — Upcoming">
            {projectsData
              .filter((p) => p.status === 'upcoming')
              .map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name} ({p.location})
                </option>
              ))}
          </optgroup>
          <optgroup label="Commercial Projects">
            {projectsData
              .filter((p) => p.category === 'commercial')
              .map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name} ({p.location})
                </option>
              ))}
          </optgroup>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
          Your Message / Requirement
        </label>
        <textarea
          name="message"
          rows={compact ? 2 : 3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Interested in 2 BHK pricing, site visit scheduling, or floor plans..."
          className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold focus:ring-1 focus:ring-stans-gold transition-colors resize-none"
        />
      </div>

      {/* DLT / TRAI Compliant Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-1 w-4 h-4 text-stans-gold rounded border-stans-slate/30 focus:ring-stans-gold accent-stans-gold"
          />
          <span className="text-[11px] text-stans-slate/80 leading-snug group-hover:text-stans-navy transition-colors">
            I agree to be contacted by Stans Buildtech / Immense Smart Solutions regarding property enquiries, project information, offers and related services through Call, SMS, WhatsApp or Email.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full shadow-lg"
          icon={Send}
        >
          {isSubmitting ? 'Registering Enquiry...' : 'Submit Enquiry'}
        </Button>
      </div>
    </form>
  );
}
