import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { companyDetails } from '../data/company';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'General Query',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) return;

    setIsSubmitting(true);
    const timestamp = new Date().toISOString();

    setTimeout(() => {
      console.log('--- CONTACT FORM SUBMITTED ---', { ...formData, consentGivenAt: timestamp });
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-32 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Store Support & Contact
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Contact Stans Buildtech Tech Store
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            Have queries about laptop specifications, bulk GST orders, custom PC builds, or warranty support? Contact our technical team.
          </p>
        </div>
      </section>

      {/* 2-Column Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Store Details */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              eyebrow="Store & Corporate Desk"
              title="Get in Touch"
              subtitle="Visit our sales experience center or connect directly with our hardware specialists."
              className="mb-4"
            />

            <div className="space-y-6 bg-white p-6 md:p-8 rounded-3xl shadow-luxury border border-stans-gold/20">
              <div className="pb-3 border-b border-stans-offwhite">
                <h3 className="font-serif text-2xl font-bold text-stans-navy">Stans Buildtech</h3>
                <p className="text-xs text-stans-gold font-semibold uppercase tracking-wider mt-0.5">Computers & Tech Accessories Store</p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-stans-gold uppercase tracking-wider">Store Address</h4>
                  <p className="text-sm font-semibold text-stans-navy leading-snug">{companyDetails.contact.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-stans-gold uppercase tracking-wider">Phone & Support</h4>
                  <p className="text-sm font-semibold text-stans-navy">
                    <a href={`tel:${companyDetails.contact.phone}`} className="hover:text-stans-gold">
                      {companyDetails.contact.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-stans-gold uppercase tracking-wider">Email Enquiries</h4>
                  <p className="text-sm font-semibold text-stans-navy">
                    <a href={`mailto:${companyDetails.contact.email}`} className="hover:text-stans-gold">
                      {companyDetails.contact.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-stans-offwhite">
                <div className="w-10 h-10 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-stans-gold uppercase tracking-wider">Working Hours</h4>
                  <p className="text-sm text-stans-navy font-medium">{companyDetails.contact.workingHours}</p>
                </div>
              </div>

              {/* Required Operator Disclosure Notice */}
              <div className="pt-4 border-t border-stans-offwhite text-center sm:text-left">
                <p className="text-xs text-stans-slate/85 font-medium">
                  Stans Buildtech is a brand operated by Immense Smart Solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-luxury border-2 border-stans-gold/30">
              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-stans-navy">Message Sent!</h3>
                  <p className="text-xs text-stans-slate">Our support team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-stans-navy">Send Us a Direct Message</h3>
                    <p className="text-xs text-stans-slate/75">Ask about tech specs, GST invoices, or bulk hardware orders.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Priyesh Sharma"
                      className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98200 12345"
                        className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold"
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
                        placeholder="priyesh@example.com"
                        className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                      Message / Product Query
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter details of laptop model, accessory query or GST invoice request..."
                      className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold resize-none"
                    />
                  </div>

                  {/* Required Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        required
                        className="mt-1 w-4 h-4 text-stans-gold rounded border-stans-slate/30 accent-stans-gold"
                      />
                      <span className="text-[11px] text-stans-slate/80 leading-snug group-hover:text-stans-navy transition-colors">
                        I agree to be contacted by Stans Buildtech / Immense Smart Solutions regarding property enquiries, project information, offers and related services through Call, SMS, WhatsApp or Email.
                      </span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full shadow-lg"
                    icon={Send}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}
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
