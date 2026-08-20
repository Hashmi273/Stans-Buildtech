import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  Building2,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Download,
  Share2,
  Layers,
  Sparkles,
  Dumbbell,
  Trees,
  Car,
  Home
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { projectsData } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const [activeFloorTab, setActiveFloorTab] = useState(0);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Find project by slug or fallback to first project
  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];

  const amenityIcons = {
    Building2,
    Dumbbell,
    Trees,
    ShieldCheck,
    Car,
    Sparkles
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      
      {/* 1. HERO BANNER */}
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden bg-stans-navy -mt-24 md:-mt-28">
        <img
          src={project.heroImage}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stans-navy via-stans-navy/60 to-black/30" />

        <div className="absolute inset-0 flex items-end pb-12 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stans-gold text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md">
              <span>{project.statusLabel || project.status}</span>
              <span>•</span>
              <span>{project.category}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
              {project.name}
            </h1>

            <div className="flex items-center gap-2 text-sm md:text-base text-stans-grey font-medium">
              <MapPin className="w-4 h-4 text-stans-gold shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY FACTS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-luxury border border-stans-gold/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 border-r last:border-0 border-stans-offwhite pr-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stans-grey">Configuration</span>
            <p className="font-serif font-bold text-stans-navy text-sm md:text-base">{project.configuration}</p>
          </div>
          <div className="space-y-1 border-r last:border-0 border-stans-offwhite pr-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stans-grey">Possession Date</span>
            <p className="font-serif font-bold text-stans-navy text-sm md:text-base">{project.possession}</p>
          </div>
          <div className="space-y-1 border-r last:border-0 border-stans-offwhite pr-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stans-grey">Project Status</span>
            <p className="font-serif font-bold text-stans-gold text-sm md:text-base">{project.statusLabel}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stans-grey">MahaRERA Registration</span>
            <p className="font-mono text-stans-navy text-xs md:text-sm font-semibold">{project.reraNumber}</p>
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW & INTEGRATED LEAD FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Overview & Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Project Overview"
                title={`Welcome to ${project.name}`}
                className="mb-2"
              />
              <p className="text-base text-stans-slate/85 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Key Highlights List */}
            {project.highlights && (
              <div className="bg-stans-offwhite p-6 rounded-xl border border-stans-gold/15 space-y-4">
                <h3 className="font-serif text-lg font-bold text-stans-navy flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-stans-gold" />
                  <span>Key Project Highlights</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-stans-gold shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-stans-navy font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => setDownloadModalOpen(true)}
                icon={Download}
              >
                Download E-Brochure
              </Button>
            </div>
          </div>

          {/* Right Column: Pre-filled Lead Capture Form */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-luxury border-2 border-stans-gold/30 sticky top-28 space-y-4">
              <div className="pb-3 border-b border-stans-offwhite">
                <span className="text-[11px] font-semibold text-stans-gold uppercase tracking-wider">Priority Desk</span>
                <h3 className="font-serif text-xl font-bold text-stans-navy">Enquire for {project.name}</h3>
                <p className="text-xs text-stans-slate/75">Get pricing details, floor plans & site visit cab assistance.</p>
              </div>

              <EnquiryForm
                defaultProject={project.name}
                compact
                title=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. AMENITIES GRID */}
      {project.amenities && (
        <section className="bg-stans-navy text-white py-16 border-y border-stans-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              eyebrow="Lifestyle & Wellness"
              title="Curated World-Class Amenities"
              subtitle="Designed to offer residents relaxation, fitness, and vibrant community interaction."
              light
              centered
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {project.amenities.map((am, idx) => {
                const IconC = amenityIcons[am.icon] || Building2;
                return (
                  <div
                    key={idx}
                    className="bg-stans-slate p-6 rounded-xl border border-stans-gold/20 text-center space-y-3 hover:border-stans-gold transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-stans-navy text-stans-gold flex items-center justify-center mx-auto group-hover:bg-stans-gold group-hover:text-white transition-colors">
                      <IconC className="w-6 h-6" />
                    </div>
                    <p className="text-xs font-semibold text-white tracking-wide">{am.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. FLOOR PLANS SECTION */}
      {project.floorPlans && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Layouts & Architecture"
            title="Floor Plans & Layout Specifications"
            subtitle="Spacious zero-wastage layouts engineered for maximum natural light and cross-ventilation."
            centered
          />

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-luxury border border-stans-gold/20 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-stans-offwhite bg-stans-offwhite/50">
              {project.floorPlans.map((fp, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFloorTab(i)}
                  className={`flex-1 py-4 text-center font-serif text-sm md:text-base font-bold transition-colors ${
                    activeFloorTab === i
                      ? 'bg-white text-stans-gold border-b-2 border-stans-gold shadow-sm'
                      : 'text-stans-slate hover:text-stans-navy'
                  }`}
                >
                  {fp.title}
                </button>
              ))}
            </div>

            {/* Active Plan Content */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-semibold text-stans-gold uppercase tracking-wider">
                  Carpet Area Specifications
                </span>
                <h4 className="font-serif text-2xl font-bold text-stans-navy">
                  {project.floorPlans[activeFloorTab].title}
                </h4>
                <div className="p-4 bg-stans-gold-light rounded-xl border border-stans-gold/20 inline-block">
                  <span className="text-xs text-stans-slate font-medium">Usable Area:</span>
                  <span className="font-mono text-base font-bold text-stans-navy ml-2">
                    {project.floorPlans[activeFloorTab].area}
                  </span>
                </div>
                <p className="text-xs text-stans-slate/70 leading-relaxed">
                  Includes master suite balcony, Vastu-compliant kitchen layout, and dedicated utility area.
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setDownloadModalOpen(true)}
                  icon={Download}
                >
                  Download Floor Plan PDF
                </Button>
              </div>

              <div className="rounded-xl overflow-hidden border border-stans-slate/20 bg-stans-navy/5 p-4 text-center">
                <img
                  src={project.floorPlans[activeFloorTab].image}
                  alt={project.floorPlans[activeFloorTab].title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <span className="text-[10px] text-stans-grey block mt-2">
                  *Architectural Layout Preview — Subject to RERA approvals
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. LOCATION ADVANTAGES */}
      {project.locationAdvantages && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-stans-slate text-white p-8 md:p-12 rounded-3xl border border-stans-gold/30">
            <div className="max-w-3xl mb-8 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
                Connectivity & Neighborhood
              </span>
              <h3 className="font-serif text-2xl md:text-4xl font-bold text-white">
                Location Advantages
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.locationAdvantages.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-stans-navy/60 p-4 rounded-xl border border-stans-gold/15">
                  <MapPin className="w-5 h-5 text-stans-gold shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-slate-200 font-medium">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Download E-Brochure Modal */}
      <Modal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        title={`Download ${project.name} Brochure`}
      >
        <EnquiryForm
          defaultProject={project.name}
          title="Enter details to receive instant PDF download link on WhatsApp"
          onSuccess={() => setTimeout(() => setDownloadModalOpen(false), 3000)}
        />
      </Modal>
    </div>
  );
}
