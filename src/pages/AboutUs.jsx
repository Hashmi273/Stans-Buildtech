import React from 'react';
import { ShieldCheck, Award, Clock, HeartHandshake, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { companyDetails } from '../data/company';

export default function AboutUs() {
  const iconMap = {
    Award,
    Clock,
    ShieldCheck,
    HeartHandshake
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-28 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Our Legacy & Story
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            About Stans Buildtech Group
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            {companyDetails.about.heroTitle}
          </p>
        </div>
      </section>

      {/* Main Narrative & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Company Narrative"
              title="Transforming Skylines Across Mumbai & Maharashtra"
              className="mb-4"
            />
            <p className="text-sm md:text-base text-stans-slate/85 leading-relaxed font-medium">
              {companyDetails.about.intro}
            </p>
            <div className="text-sm text-stans-slate/75 leading-relaxed space-y-4">
              {companyDetails.about.fullStory.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="pt-2">
              <Button to="/director-message" variant="primary" size="md">
                Read Director's Message
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-stans-gold/30">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80"
                alt="Stans Buildtech Construction Quality"
                className="w-full h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-stans-navy p-6 rounded-xl border border-stans-gold/30 shadow-2xl hidden sm:block max-w-xs text-white">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-stans-gold uppercase">Founded on Integrity</span>
                <p className="text-xs text-stans-grey">Committed to engineering precision and community living spaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Qualitative Milestones Strip */}
      <section className="bg-stans-slate text-white py-14 border-y border-stans-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {companyDetails.about.stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="font-serif text-3xl md:text-5xl font-bold text-stans-gold">
                  {stat.number}
                </div>
                <p className="text-xs md:text-sm text-stans-grey font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Pillars"
          title="Guided by Enduring Values"
          subtitle="Four core principles drive every architectural design, contract execution, and customer interaction."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyDetails.about.values.map((val, index) => {
            const IconComp = iconMap[val.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-stans-gold/20 shadow-luxury hover:border-stans-gold/50 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stans-navy">{val.title}</h3>
                <p className="text-xs md:text-sm text-stans-slate/75 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* RERA Transparency Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-stans-gold-light p-8 md:p-12 rounded-2xl border border-stans-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-stans-gold text-white flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-stans-navy mb-1">100% MahaRERA Compliant Projects</h3>
              <p className="text-xs md:text-sm text-stans-slate/80 leading-relaxed max-w-2xl">
                Every residential and commercial project launched by Stans Buildtech is registered under MahaRERA with complete legal clearance, clear land titles, and transparent delivery schedules.
              </p>
            </div>
          </div>
          <Button to="/projects" variant="primary" size="md">
            View Registered Projects
          </Button>
        </div>
      </section>
    </div>
  );
}
