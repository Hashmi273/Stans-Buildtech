import React from 'react';
import { ShieldCheck, Award, Truck, Headphones, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { companyDetails } from '../data/company';

export default function AboutUs() {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-32 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            About Our Tech Store
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            About Stans Buildtech
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
              eyebrow="Our Story"
              title="Empowering Workstations & Gamers Across India"
              className="mb-4"
            />
            
            {/* Required Brand Statement */}
            <div className="p-4 bg-stans-gold-light rounded-xl border border-stans-gold/30 text-stans-navy">
              <p className="text-sm font-semibold leading-relaxed">
                Stans Buildtech is a real estate & technology retail brand operated by Immense Smart Solutions, focused on presenting high-performance computing solutions and laptop accessories across India.
              </p>
            </div>

            <div className="text-sm text-stans-slate/85 leading-relaxed space-y-4">
              {companyDetails.about.fullStory.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2">
              <Button to="/shop" variant="primary" size="md">
                Explore Product Catalog
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-stans-gold/30">
              <img
                src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80"
                alt="Stans Buildtech Computer Store"
                className="w-full h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-stans-navy p-6 rounded-xl border border-stans-gold/30 shadow-2xl hidden sm:block max-w-xs text-white">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-stans-gold uppercase">100% Original Products</span>
                <p className="text-xs text-stans-grey">Direct brand warranty and genuine invoice support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-stans-slate text-white py-14 border-y border-stans-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {companyDetails.about.stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="font-serif text-2xl md:text-4xl font-bold text-stans-gold">
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
          title="Why Tech Buyers Choose Stans Buildtech"
          subtitle="Four core commitments that define our customer service and product guarantee."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl border border-stans-gold/20 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stans-navy">100% Genuine Guarantee</h3>
            <p className="text-xs md:text-sm text-stans-slate/75 leading-relaxed">
              Every laptop and accessory shipped includes verified serial numbers and official brand warranty.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-stans-gold/20 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stans-navy">Insured Fast Express Delivery</h3>
            <p className="text-xs md:text-sm text-stans-slate/75 leading-relaxed">
              Insured courier partners ensure your expensive electronics arrive safely within 24-48 hours.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-stans-gold/20 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stans-navy">GST Input Credit Invoices</h3>
            <p className="text-xs md:text-sm text-stans-slate/75 leading-relaxed">
              Full GST tax invoice provided for corporate accounting and tax deduction benefits.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-stans-gold/20 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stans-navy">Dedicated Tech Support</h3>
            <p className="text-xs md:text-sm text-stans-slate/75 leading-relaxed">
              Hardware compatibility advice and post-sale technical assistance from experienced technicians.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
