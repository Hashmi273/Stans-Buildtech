import React from 'react';
import { MapPin, Phone, Mail, Clock, Youtube, Linkedin, Instagram, Facebook } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import { companyDetails } from '../data/company';

export default function ContactUs() {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-28 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Reach Us
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Contact Stans Buildtech
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            Our corporate sales team and customer advisors are at your service for site visits, project brochures, and booking queries.
          </p>
        </div>
      </section>

      {/* 2-Column Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Snippets & Map */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              eyebrow="Corporate Headquarters"
              title="Get in Touch with Us"
              subtitle="Visit our sales lounge or connect directly with our relationship managers."
              className="mb-4"
            />

            <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-luxury border border-stans-gold/20">
              
              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-stans-gold uppercase tracking-wider">Office Address</h4>
                  <p className="text-sm font-semibold text-stans-navy leading-snug">{companyDetails.contact.address}</p>
                  <p className="text-[10px] text-stans-grey font-mono">{'{/* TODO: Client to confirm office address */}'}</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-stans-gold uppercase tracking-wider">Phone & Mobile</h4>
                  <p className="text-sm font-semibold text-stans-navy">
                    <a href={`tel:${companyDetails.contact.phone}`} className="hover:text-stans-gold">
                      {companyDetails.contact.phone}
                    </a>
                    {' / '}
                    <a href={`tel:${companyDetails.contact.mobile}`} className="hover:text-stans-gold">
                      {companyDetails.contact.mobile}
                    </a>
                  </p>
                  <p className="text-[10px] text-stans-grey font-mono">{'{/* TODO: Client to confirm phone numbers */}'}</p>
                </div>
              </div>

              {/* Email Address */}
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
                  <p className="text-[10px] text-stans-grey font-mono">{'{/* TODO: Client to confirm official email */}'}</p>
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
            </div>

            {/* Embedded Google Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-luxury border border-stans-gold/20 h-64 bg-stans-navy relative">
              <iframe
                title="Stans Buildtech Office Location"
                src={companyDetails.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: TRAI/DLT Compliant Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-luxury border-2 border-stans-gold/30">
              <EnquiryForm title="Send Us a Direct Message" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
