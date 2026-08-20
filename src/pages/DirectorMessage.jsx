import React, { useState } from 'react';
import { Quote, Award, Building2, Send } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import EnquiryForm from '../components/forms/EnquiryForm';
import { companyDetails } from '../data/company';

export default function DirectorMessage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-28 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Leadership Vision
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Director's Message
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            {companyDetails.director.title}
          </p>
        </div>
      </section>

      {/* Main Director Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Executive Photo & Signature Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-stans-gold/30">
              <img
                src={companyDetails.director.image}
                alt="Director Stans Buildtech"
                className="w-full h-[480px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stans-navy via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                {/* TODO: Client to provide exact Director Name & Designation */}
                <h3 className="font-serif text-2xl font-bold text-white">
                  {companyDetails.director.name}
                </h3>
                <p className="text-xs text-stans-gold font-medium uppercase tracking-wider">
                  {companyDetails.director.designation}
                </p>
                <p className="text-[11px] text-stans-grey pt-1">
                  {/* TODO Marker */}
                  {'{/* TODO: Client to confirm Director name and exact credentials */}'}
                </p>
              </div>
            </div>

            {/* Leadership Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-stans-gold/20 shadow-md flex items-center gap-3">
                <Award className="w-8 h-8 text-stans-gold shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-stans-navy">Civil Engineer</h4>
                  <p className="text-[11px] text-stans-slate/70">Technical Execution</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stans-gold/20 shadow-md flex items-center gap-3">
                <Building2 className="w-8 h-8 text-stans-gold shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-stans-navy">Visionary Builder</h4>
                  <p className="text-[11px] text-stans-slate/70">Mumbai Skylines</p>
                </div>
              </div>
            </div>
          </div>

          {/* Director's Narrative & Message Body */}
          <div className="lg:col-span-7 space-y-8">
            {/* Highlighted Quote Box */}
            <div className="bg-stans-gold-light p-8 rounded-2xl border-l-4 border-stans-gold relative shadow-sm">
              <Quote className="w-10 h-10 text-stans-gold/30 absolute top-4 right-4" />
              <p className="font-serif italic text-base md:text-lg text-stans-navy leading-relaxed relative z-10">
                {companyDetails.director.quote}
              </p>
            </div>

            <div className="space-y-6 text-sm md:text-base text-stans-slate/85 leading-relaxed font-normal">
              {companyDetails.director.messageParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-stans-slate/20 space-y-2">
              <div className="font-serif italic text-2xl text-stans-navy font-bold">
                {companyDetails.director.name}
              </div>
              <p className="text-xs text-stans-gold font-semibold uppercase tracking-wider">
                {companyDetails.director.designation}
              </p>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setEnquiryModalOpen(true)}
                icon={Send}
              >
                Connect with Management
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        title="Schedule a Meeting with Stans Team"
      >
        <EnquiryForm onSuccess={() => setTimeout(() => setEnquiryModalOpen(false), 3000)} />
      </Modal>
    </div>
  );
}
