import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Building,
  CheckCircle2,
  Newspaper,
  PhoneCall
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import EnquiryForm from '../components/forms/EnquiryForm';
import { projectsData } from '../data/projects';
import { companyDetails } from '../data/company';
import { galleryData } from '../data/gallery';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const heroSlides = [
    {
      title: 'Redefining Luxury Living in Chembur',
      subtitle: 'Sky Annex — 2 & 3 BHK High-Rise Residences featuring 30+ Rooftop Amenities.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80',
      link: '/projects/sky-annex-chembur',
      location: 'Chembur, Mumbai'
    },
    {
      title: 'Contemporary Western Suburbs Benchmark',
      subtitle: '95 West — Smart Modern Homes adjacent to Link Road & Metro Corridors.',
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1920&q=80',
      link: '/projects/95-west-malad-west',
      location: 'Malad West, Mumbai'
    },
    {
      title: 'Ready Possession with Occupancy Certificate',
      subtitle: 'Ratnadeep — Move into your dream home today with zero GST.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80',
      link: '/projects/ratnadeep-tilak-nagar',
      location: 'Tilak Nagar, Chembur'
    },
    {
      title: 'Nature-Facing Elevated Urban Living',
      subtitle: 'Avenue Park — Scenic 2 & 3 BHK Homes with Park View Balconies.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
      link: '/projects/avenue-park-malad-east',
      location: 'Malad East, Mumbai'
    }
  ];

  // Auto slide banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const featuredProjects = projectsData.slice(0, 4);

  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      
      {/* 1. HERO SLIDER */}
      <section className="relative h-[85vh] min-h-[550px] max-h-[800px] w-full overflow-hidden bg-stans-navy -mt-24 md:-mt-28">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-stans-navy/95 via-stans-navy/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-stans-navy via-transparent to-black/30" />

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="max-w-2xl text-white space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-stans-gold/90 text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-md">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{slide.location}</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
                    {slide.title}
                  </h1>

                  <p className="text-sm md:text-lg text-stans-grey leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Button to={slide.link} variant="primary" size="lg" icon={ArrowRight}>
                      Explore Project
                    </Button>
                    <Button
                      variant="outline-light"
                      size="lg"
                      onClick={() => setEnquiryModalOpen(true)}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-stans-navy/60 hover:bg-stans-gold text-white flex items-center justify-center border border-white/20 transition-all duration-300"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-stans-navy/60 hover:bg-stans-gold text-white flex items-center justify-center border border-white/20 transition-all duration-300"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-stans-gold' : 'w-2.5 bg-white/40 hover:bg-white'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. FEATURED / CURRENT PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Portfolio Highlights"
            title="Featured Real Estate Developments"
            subtitle="Explore ongoing, ready-to-move, and commercial landmarks crafted by Stans Buildtech across Mumbai."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0">
            <Button to="/projects" variant="outline" size="md" icon={ArrowRight}>
              View All Projects
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 3. ABOUT SNAPSHOT */}
      <section className="bg-stans-navy text-white py-20 relative overflow-hidden border-y border-stans-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Stack */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stans-gold/30">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Stans Buildtech Architecture"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Badge Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-stans-slate p-6 rounded-xl border border-stans-gold/40 shadow-2xl hidden sm:block max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-stans-gold flex items-center justify-center text-white font-serif font-bold text-xl">
                  15+
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stans-gold">Proven Track Record</p>
                  <p className="text-xs text-stans-grey">Years of qualitative real estate delivery in Mumbai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & CTA */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stans-gold">
              <span className="w-6 h-[2px] bg-stans-gold" />
              <span>About Stans Buildtech</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Building Trust & Evolving Lifestyles Across Mumbai
            </h2>

            <p className="text-sm md:text-base text-stans-grey leading-relaxed">
              Stans Buildtech Group is a fast-growing, engineering-led real estate developer dedicated to creating vibrant residential communities and modern commercial hubs. With a focus on prime suburban locations—including Chembur, Malad, Dahisar, and Jogeshwari—we combine structural precision with luxury design.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-stans-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">RERA Certified</h4>
                  <p className="text-xs text-stans-grey">100% compliant documentation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-stans-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">Timely Execution</h4>
                  <p className="text-xs text-stans-grey">On-schedule project handovers</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button to="/about" variant="primary" size="md" icon={ArrowRight}>
                Explore Our Story
              </Button>
              <Button to="/director-message" variant="outline-light" size="md">
                Director's Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY STANS BUILDTECH (TRUST POINTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Core Strengths"
          title="Why Home Buyers Choose Stans Buildtech"
          subtitle="Our foundation rests on six uncompromising developer pillars designed to safeguard your investment."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-stans-gold/15 shadow-luxury hover:border-stans-gold/40 transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stans-navy">Engineering Precision</h3>
            <p className="text-sm text-stans-slate/75 leading-relaxed">
              Led by experienced civil engineers, every project follows rigorous structural audits, earthquake-resistant design, and premium raw materials.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-stans-gold/15 shadow-luxury hover:border-stans-gold/40 transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stans-navy">Timely Delivery Track Record</h3>
            <p className="text-sm text-stans-slate/75 leading-relaxed">
              Advanced project planning and mechanized construction workflows ensure key handovers align strictly with announced timelines.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-stans-gold/15 shadow-luxury hover:border-stans-gold/40 transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stans-navy">MahaRERA Compliance</h3>
            <p className="text-sm text-stans-slate/75 leading-relaxed">
              Complete transparency with legal approvals, clear title deeds, and clear MahaRERA disclosures for every unit sold.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-stans-gold/15 shadow-luxury hover:border-stans-gold/40 transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stans-navy">Strategic Prime Locations</h3>
            <p className="text-sm text-stans-slate/75 leading-relaxed">
              Carefully chosen transit-adjacent land parcels in Chembur, Malad, Dahisar, and Jogeshwari ensuring high appreciation potential.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-stans-gold/15 shadow-luxury hover:border-stans-gold/40 transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stans-navy">Community & Amenities</h3>
            <p className="text-sm text-stans-slate/75 leading-relaxed">
              Thoughtfully curated rooftops, sky gardens, gyms, and children play zones designed to foster active community living.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-stans-gold/15 shadow-luxury hover:border-stans-gold/40 transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-stans-gold/10 text-stans-gold flex items-center justify-center">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stans-navy">Dedicated CRM Support</h3>
            <p className="text-sm text-stans-slate/75 leading-relaxed">
              Seamless customer service from booking assistance, home loan coordination, to final society formation and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* 5. NEWS & UPDATES AT A GLANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            eyebrow="Press & Updates"
            title="News at a Glance"
            subtitle="Latest construction updates, site progress photos, and press announcements."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0">
            <Button to="/gallery" variant="text" icon={ArrowRight}>
              Explore Full Gallery & News
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryData.items.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-luxury border border-stans-gold/10 group hover:border-stans-gold/30 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stans-gold bg-stans-gold-light px-2.5 py-1 rounded">
                  {item.category} • {item.date}
                </span>
                <h3 className="font-serif font-bold text-lg text-stans-navy group-hover:text-stans-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stans-slate/75 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stans-navy hover:text-stans-gold transition-colors pt-2"
                >
                  <Newspaper className="w-3.5 h-3.5 text-stans-gold" />
                  <span>Read Story</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-stans-navy via-stans-slate to-stans-navy text-white rounded-3xl p-8 md:p-14 border border-stans-gold/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-stans-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-xl text-center md:text-left relative z-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
              Get In Touch
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
              Looking for your next home or investment? Let's talk.
            </h2>
            <p className="text-sm text-stans-grey leading-relaxed">
              Connect with our property advisors for exclusive site visits, custom payment plans, and brochures.
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setEnquiryModalOpen(true)}
              icon={ArrowRight}
            >
              Book Site Visit / Enquiry
            </Button>
            <a
              href={`tel:${companyDetails.contact.phone}`}
              className="px-6 py-3.5 rounded-md border border-stans-gold/40 text-white font-semibold text-sm hover:bg-stans-gold hover:text-white transition-all duration-300"
            >
              Call {companyDetails.contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Quick Modal */}
      <Modal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        title="Enquire for Stans Buildtech Projects"
      >
        <EnquiryForm onSuccess={() => setTimeout(() => setEnquiryModalOpen(false), 3000)} />
      </Modal>
    </div>
  );
}
