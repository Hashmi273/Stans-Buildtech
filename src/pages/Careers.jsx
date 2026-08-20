import React, { useState } from 'react';
import { Briefcase, Upload, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { companyDetails } from '../data/company';

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'General Application',
    message: '',
    consent: false,
    resumeName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionTime, setSubmissionTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resumeName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const timestamp = new Date().toISOString();

    setTimeout(() => {
      console.log('--- CAREERS APPLICATION SUBMITTED ---', {
        ...formData,
        consentGivenAt: timestamp
      });
      setIsSubmitting(false);
      setSubmitted(true);
      setSubmissionTime(timestamp);
    }, 800);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-28 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Build Your Career
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Careers at Stans Buildtech
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            {companyDetails.careers.intro}
          </p>
        </div>
      </section>

      {/* Open Positions & Culture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Openings List */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              eyebrow="Opportunities"
              title="Current Job Openings"
              subtitle="Explore active vacancies across civil engineering, sales, architecture, and project management."
              className="mb-4"
            />

            <div className="space-y-4">
              {companyDetails.careers.openings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-6 rounded-xl border border-stans-gold/20 shadow-luxury space-y-3 hover:border-stans-gold transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stans-gold bg-stans-gold-light px-2.5 py-1 rounded">
                      {job.department}
                    </span>
                    <span className="text-xs text-stans-grey font-mono">{job.experience}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-stans-navy">{job.title}</h3>
                  <p className="text-xs text-stans-slate/75 leading-relaxed">{job.description}</p>
                  
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-stans-slate font-medium">Location: {job.location}</span>
                    <button
                      onClick={() => setFormData({ ...formData, position: job.title })}
                      className="text-xs font-semibold text-stans-gold hover:underline uppercase tracking-wider"
                    >
                      Apply for Position →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Upload Form */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-luxury border-2 border-stans-gold/30 sticky top-28 space-y-6">
              <div className="pb-3 border-b border-stans-offwhite">
                <span className="text-[11px] font-semibold text-stans-gold uppercase tracking-wider">Join Our Team</span>
                <h3 className="font-serif text-xl font-bold text-stans-navy">Send Us Your Resume</h3>
                <p className="text-xs text-stans-slate/75">Don't see a matching position? Submit your CV for future consideration.</p>
              </div>

              {submitted ? (
                <div className="bg-stans-gold-light p-6 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-stans-gold mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-stans-navy">Application Received!</h4>
                  <p className="text-xs text-stans-slate leading-relaxed">
                    Thank you for applying. Our HR recruitment team will review your CV and reach out if your profile matches active projects.
                  </p>
                  <div className="inline-flex items-center gap-1 text-[10px] text-stans-slate/80 font-mono bg-white px-2.5 py-1 rounded border">
                    <ShieldCheck className="w-3 h-3 text-stans-gold" />
                    <span>Consent Logged: {new Date(submissionTime).toLocaleString()}</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ananya Roy"
                      className="w-full px-3.5 py-2 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:border-stans-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ananya@example.com"
                      className="w-full px-3.5 py-2 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:border-stans-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 12345"
                      className="w-full px-3.5 py-2 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:border-stans-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                      Applying For Position
                    </label>
                    <input
                      type="text"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-3.5 py-2 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:border-stans-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                      Attach Resume / CV (PDF/Word)
                    </label>
                    <div className="relative border-2 border-dashed border-stans-slate/30 rounded-md p-4 text-center bg-stans-offwhite/30 hover:border-stans-gold transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <Upload className="w-5 h-5 text-stans-gold mx-auto mb-1" />
                      <span className="text-xs text-stans-slate block">
                        {formData.resumeName ? formData.resumeName : 'Click or Drag to Upload Resume'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                      Cover Note / Message
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your career background..."
                      className="w-full px-3.5 py-2 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:border-stans-gold focus:outline-none resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 text-stans-gold accent-stans-gold"
                    />
                    <span className="text-[10px] text-stans-slate/80 leading-tight">
                      I consent to Stans Buildtech storing my resume details for HR recruitment purposes.
                    </span>
                  </label>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                    icon={Send}
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Resume'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
