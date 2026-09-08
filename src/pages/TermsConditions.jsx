import React from 'react';
import { FileText, Scale, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/company';

export default function TermsConditions() {
  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-28 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            User Agreement
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            Please read these terms governing the access, navigation, and usage of the official Stans Buildtech digital portal.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-luxury border border-stans-gold/20 space-y-8 text-stans-navy">
          
          <div className="p-4 bg-stans-gold-light rounded-xl border border-stans-gold/30 text-stans-navy space-y-1">
            <p className="text-sm md:text-base font-bold">
              These Terms & Conditions govern the use of the website and services operated by ROLLAND SPACES PRIVATE LIMITED (Private Limited Company, GSTIN: 27AAMCR2075D1ZC).
            </p>
            <p className="text-xs text-stans-slate/80">
              Principal Place of Business: 5th Floor, B-518, Samarth Aishwarya, Adarsh Nagar Road, Near Highland Park, Andheri West, Mumbai, Maharashtra - 400053.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">1</span>
              <span>Website Usage & Intellectual Property</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              All branding elements, logos, trade names ("Stans Buildtech", "Evolving Lifestyle"), 3D architectural renderings, site progress photographs, text content, and code scripts are the exclusive intellectual property of Stans Buildtech Group. Unauthorized copying, redistribution, or commercial use without written permission is strictly prohibited.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">2</span>
              <span>Conceptual Images & Specifications Disclaimer</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              All project elevations, floor layouts, sample flat photos, and amenity renders shown on this domain are conceptual representations designed by artists. Actual finished property specifications and carpet areas are subject to final sanctioning authority approvals and formal Agreement for Sale contracts.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">3</span>
              <span>MahaRERA Compliance Disclosures</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              Prospective purchasers are requested to verify project details, title certificates, and MahaRERA registration numbers directly on the official MahaRERA portal (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="text-stans-gold underline font-semibold">maharera.mahaonline.gov.in</a>) prior to making property booking decisions.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">4</span>
              <span>Limitation of Liability</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              Stans Buildtech will not be held liable for any indirect, incidental, or consequential damages resulting from website reliance, network downtime, or inaccuracies in third-party linked resources.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 pt-4 border-t border-stans-offwhite">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">5</span>
              <span>Jurisdiction & Governing Law</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              These terms and conditions are governed by the laws of India. Any disputes arising out of website usage shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
