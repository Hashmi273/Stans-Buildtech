import React from 'react';
import { ShieldAlert, CheckCircle2, FileText, Info } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

export default function Disclaimer() {
  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-28 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Legal & Terms
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Website Disclaimer
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            Important legal information regarding website content, property illustrations, and MahaRERA compliance disclosures.
          </p>
        </div>
      </section>

      {/* Main Disclaimer Text */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-luxury border border-stans-gold/20 space-y-8 text-stans-navy">
          
          <div className="flex items-start gap-4 p-4 bg-stans-gold-light rounded-xl border border-stans-gold/30">
            <Info className="w-6 h-6 text-stans-gold shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-stans-navy font-medium leading-relaxed">
              Please read the following disclaimer clauses carefully before utilizing information or submitting personal contact details on this website.
            </p>
          </div>

          {/* Clause 1 */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">1</span>
              <span>Representational Nature of Media & Specs</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              All architectural renderings, 3D floor plan visualizations, interior mockups, photographs, stock images, and artistic impressions displayed across this website are purely conceptual and representational in nature. Actual finished building dimensions, elevation details, color shades, fittings, and landscaping elements may vary during actual execution.
            </p>
          </div>

          {/* Clause 2 */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">2</span>
              <span>Developer's Modification Rights</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              Stans Buildtech and its affiliated entity SPVs reserve the absolute right to alter, modify, add, or delete floor plan configurations, amenity specs, project layouts, or material brands without prior notice or public obligation, subject to sanctioning authority approvals.
            </p>
          </div>

          {/* Clause 3 */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">3</span>
              <span>Non-Contractual Nature of Website Content</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              The contents, text blurbs, pricing estimates, and downloadable brochures on this website do not constitute an explicit offer, recommendation, invitation, or legal contract between Stans Buildtech and the viewer. All property transactions, payment schedules, and allotment terms are governed solely by the formal Agreement for Sale executed between the buyer and developer.
            </p>
          </div>

          {/* Clause 4 */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">4</span>
              <span>MahaRERA Official Verification</span>
            </h3>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              Prospective purchasers are advised to verify all project specific details, including sanctioned plan layouts, floor areas, title certificates, and MahaRERA registration numbers directly on the official Maharashtra Real Estate Regulatory Authority website (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="text-stans-gold underline font-semibold">maharera.mahaonline.gov.in</a>) or at our corporate office lounge prior to making any financial booking decisions.
            </p>
          </div>

          {/* Clause 5: Non-Affiliation Clause */}
          <div className="space-y-3 pt-4 border-t border-stans-offwhite">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-xl text-stans-navy flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-stans-navy text-stans-gold text-xs flex items-center justify-center font-bold">5</span>
                <span>Standard Non-Affiliation Notice</span>
              </h3>
              <span className="text-[10px] text-stans-grey font-mono uppercase bg-stans-offwhite px-2 py-0.5 rounded border">
                {'{/* TODO: Client to confirm applicability */}'}
              </span>
            </div>
            <p className="text-sm text-stans-slate/85 leading-relaxed pl-8">
              Stans Buildtech operates independently and has no direct corporate affiliation with third-party real estate portal listing sites or unauthorized broker domains unless explicitly named in our official communications. Please ensure all payments are drawn strictly in favor of the designated MahaRERA escrow bank account specified in your allotment letter.
            </p>
          </div>

          {/* DLT / TRAI Opt-in Policy */}
          <div className="p-6 bg-stans-offwhite rounded-2xl border border-stans-gold/20 space-y-2">
            <h4 className="font-serif text-base font-bold text-stans-navy">DLT & TRAI Communication Policy</h4>
            <p className="text-xs text-stans-slate/85 leading-relaxed">
              By providing your contact details on any web form on this domain, you explicitly authorize Stans Buildtech and its representatives to contact you via Phone Call, SMS, WhatsApp, and Email regarding project updates, pricing, and offers. Your consent timestamp is recorded upon form submission. You may withdraw consent at any time by emailing <a href="mailto:info@stansbuildtech.com" className="text-stans-gold underline">info@stansbuildtech.com</a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
