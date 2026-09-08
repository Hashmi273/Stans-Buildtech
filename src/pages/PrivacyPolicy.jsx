import React from 'react';
import { ShieldCheck, Lock, Eye, Mail, FileText } from 'lucide-react';
import { companyDetails } from '../data/company';

export default function PrivacyPolicy() {
  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-28 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Data Protection & Privacy
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            Stans Buildtech is committed to safeguarding your personal privacy and ensuring transparent handling of your data.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-luxury border border-stans-gold/20 space-y-8 text-stans-navy">
          
          <div className="p-4 bg-stans-gold-light rounded-xl border border-stans-gold/30 text-stans-navy space-y-1">
            <p className="text-sm md:text-base font-bold">
              ROLLAND SPACES PRIVATE LIMITED (“we”, “our”, “us”) is a Private Limited Company (GSTIN: 27AAMCR2075D1ZC).
            </p>
            <p className="text-xs text-stans-slate/80">
              Principal Place of Business: 5th Floor, B-518, Samarth Aishwarya, Adarsh Nagar Road, Near Highland Park, Andheri West, Mumbai, Maharashtra - 400053.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">1</span>
              <span>Information We Collect</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              When you interact with forms on our website (including Enquiry forms, Instant Callback widgets, site visit registrations, and Career applications), we collect personal identification information including:
            </p>
            <ul className="list-disc list-inside text-sm text-stans-slate/85 pl-12 space-y-1">
              <li>Full Name and Mobile Phone Number</li>
              <li>Email Address and Preferred Project Location</li>
              <li>Resume / CV data (for career applications)</li>
              <li>ISO Consent Timestamps (<code className="text-xs bg-stans-offwhite px-1.5 py-0.5 rounded font-mono">consentGivenAt</code>) for TRAI/DLT compliance</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">2</span>
              <span>How We Use Your Data</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              Your information is strictly used for real estate customer service purposes, including:
            </p>
            <ul className="list-disc list-inside text-sm text-stans-slate/85 pl-12 space-y-1">
              <li>Sending project brochures, floor plans, and price sheets requested by you</li>
              <li>Scheduling property site visits and sales executive callbacks</li>
              <li>Providing MahaRERA registered construction progress updates</li>
              <li>HR evaluation for job opening submissions</li>
            </ul>
          </div>

          {/* Section 3: TRAI & DLT Policy */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">3</span>
              <span>TRAI & DLT Communication Consent</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              By checking the consent box on any lead form, you explicitly authorize <strong>Stans Buildtech</strong> and its authorized sales representatives to contact you via Phone Call, SMS, WhatsApp, and Email. This consent overrides any Do Not Disturb (DND) registration on your mobile number for transaction-related updates.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">4</span>
              <span>Data Protection & Sharing Policy</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              We maintain strict administrative, technical, and physical safeguards to protect your personal details against unauthorized access. Stans Buildtech does <strong>not sell, rent, or trade</strong> your personal contact details to third-party marketing brokers or unrelated entities.
            </p>
          </div>

          {/* Section 5: Rights & Opt-out */}
          <div className="space-y-3 pt-4 border-t border-stans-offwhite">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">5</span>
              <span>Withdrawing Consent & Contacting Privacy Officer</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              You have the right to withdraw your communication consent or request deletion of your personal contact records at any time by emailing us at <a href={`mailto:${companyDetails.contact.email}`} className="text-stans-gold underline font-semibold">{companyDetails.contact.email}</a> with the subject line "Privacy Request".
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
