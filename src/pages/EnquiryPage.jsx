import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';

export default function EnquiryPage() {
  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-28 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Sales & Advisory Desk
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Project Enquiry & Consultation
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            Fill in your preferred project details below to receive instant brochures, cost sheets, and site visit scheduling.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-luxury border-2 border-stans-gold/30">
          <EnquiryForm title="Project Lead & Callback Form" />
        </div>
      </section>
    </div>
  );
}
