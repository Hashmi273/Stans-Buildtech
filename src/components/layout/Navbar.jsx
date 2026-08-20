import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Building2,
  Home,
  CheckCircle,
  Clock,
  Sparkles,
  Send,
  MapPin
} from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import EnquiryForm from '../forms/EnquiryForm';
import { companyDetails } from '../../data/company';
import { projectsData } from '../../data/projects';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [storyDropdownOpen, setStoryDropdownOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
    setStoryDropdownOpen(false);
  }, [location.pathname]);

  const ongoingProjects = projectsData.filter((p) => p.status === 'ongoing');
  const readyProjects = projectsData.filter((p) => p.status === 'ready');
  const upcomingProjects = projectsData.filter((p) => p.status === 'upcoming');
  const commercialProjects = projectsData.filter((p) => p.category === 'commercial');

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Top Utility Bar */}
        <div className="bg-stans-navy text-stans-grey text-xs py-2 px-4 border-b border-stans-slate/50 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${companyDetails.contact.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-stans-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-stans-gold" />
                <span>Call Us: {companyDetails.contact.phone}</span>
              </a>
              <a
                href={`mailto:${companyDetails.contact.email}`}
                className="inline-flex items-center gap-1.5 hover:text-stans-gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stans-gold" />
                <span>{companyDetails.contact.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-6">
              <Link to="/contact" className="hover:text-stans-gold transition-colors">
                Reach Us
              </Link>
              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="text-stans-gold hover:text-stans-gold-hover font-semibold transition-colors flex items-center gap-1"
              >
                <Send className="w-3 h-3" />
                <span>Enquiry</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-300 ${
            scrolled
              ? 'bg-stans-navy/95 backdrop-blur-md text-white shadow-xl py-3 border-b border-stans-gold/20'
              : 'bg-stans-navy text-white py-4 border-b border-stans-slate/40'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            {/* Logo */}
            <Logo variant="light" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {/* Home */}
              <Link
                to="/"
                className={`transition-colors hover:text-stans-gold ${
                  location.pathname === '/' ? 'text-stans-gold font-semibold' : 'text-slate-200'
                }`}
              >
                Home
              </Link>

              {/* Our Story Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setStoryDropdownOpen(true)}
                onMouseLeave={() => setStoryDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-slate-200 hover:text-stans-gold transition-colors py-2">
                  <span>Our Story</span>
                  <ChevronDown className="w-4 h-4 text-stans-gold" />
                </button>

                {storyDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-stans-slate border border-stans-gold/30 rounded-lg shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-sm text-slate-200 hover:bg-stans-navy hover:text-stans-gold transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/director-message"
                      className="block px-4 py-2 text-sm text-slate-200 hover:bg-stans-navy hover:text-stans-gold transition-colors"
                    >
                      Director's Message
                    </Link>
                  </div>
                )}
              </div>

              {/* Our Projects Mega-Menu Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setProjectsDropdownOpen(true)}
                onMouseLeave={() => setProjectsDropdownOpen(false)}
              >
                <Link
                  to="/projects"
                  className={`flex items-center gap-1 transition-colors py-2 ${
                    location.pathname.startsWith('/projects')
                      ? 'text-stans-gold font-semibold'
                      : 'text-slate-200 hover:text-stans-gold'
                  }`}
                >
                  <span>Our Projects</span>
                  <ChevronDown className="w-4 h-4 text-stans-gold" />
                </Link>

                {/* Mega-Menu Panel */}
                {projectsDropdownOpen && (
                  <div className="absolute top-full -left-48 w-[720px] bg-stans-slate border border-stans-gold/30 rounded-xl shadow-2xl p-6 z-50 animate-in fade-in zoom-in-95 duration-150 grid grid-cols-3 gap-6">
                    {/* Residential — Ongoing & Ready */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stans-gold mb-3 pb-1 border-b border-stans-gold/20">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Ongoing Residential</span>
                      </div>
                      <ul className="space-y-2">
                        {ongoingProjects.map((p) => (
                          <li key={p.id}>
                            <Link
                              to={`/projects/${p.slug}`}
                              className="text-xs text-slate-300 hover:text-stans-gold transition-colors block"
                            >
                              <span className="font-medium">{p.name}</span>
                              <span className="text-[10px] text-stans-grey block">{p.location}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ready to Move & Upcoming */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3 pb-1 border-b border-stans-gold/20">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Ready to Move</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {readyProjects.map((p) => (
                          <li key={p.id}>
                            <Link
                              to={`/projects/${p.slug}`}
                              className="text-xs text-slate-300 hover:text-stans-gold transition-colors block"
                            >
                              <span className="font-medium">{p.name}</span>
                              <span className="text-[10px] text-stans-grey block">{p.location}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stans-gold mb-2 pb-1 border-b border-stans-gold/20">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Upcoming</span>
                      </div>
                      <ul className="space-y-1.5">
                        {upcomingProjects.map((p) => (
                          <li key={p.id}>
                            <Link
                              to={`/projects/${p.slug}`}
                              className="text-xs text-slate-300 hover:text-stans-gold transition-colors block"
                            >
                              <span className="font-medium">{p.name}</span>
                              <span className="text-[10px] text-stans-grey block">{p.location}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Commercial */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3 pb-1 border-b border-stans-gold/20">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Commercial</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {commercialProjects.map((p) => (
                          <li key={p.id}>
                            <Link
                              to={`/projects/${p.slug}`}
                              className="text-xs text-slate-300 hover:text-stans-gold transition-colors block"
                            >
                              <span className="font-medium">{p.name}</span>
                              <span className="text-[10px] text-stans-grey block">{p.location}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 border-t border-stans-gold/20">
                        <Link
                          to="/projects"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-stans-gold hover:text-white transition-colors"
                        >
                          View All Projects Archive →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Gallery / News */}
              <Link
                to="/gallery"
                className={`transition-colors hover:text-stans-gold ${
                  location.pathname === '/gallery' ? 'text-stans-gold font-semibold' : 'text-slate-200'
                }`}
              >
                Gallery / News
              </Link>

              {/* Careers */}
              <Link
                to="/careers"
                className={`transition-colors hover:text-stans-gold ${
                  location.pathname === '/careers' ? 'text-stans-gold font-semibold' : 'text-slate-200'
                }`}
              >
                Careers
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                className={`transition-colors hover:text-stans-gold ${
                  location.pathname === '/contact' ? 'text-stans-gold font-semibold' : 'text-slate-200'
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setEnquiryModalOpen(true)}
              >
                Enquiry
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-stans-gold focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </nav>

        {/* Mobile Slide-Out Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] bg-stans-navy/98 backdrop-blur-xl z-50 p-6 overflow-y-auto border-t border-stans-gold/20 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-4">
                <Link
                  to="/"
                  className="block text-lg font-serif font-bold text-white hover:text-stans-gold"
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <span className="block text-xs font-semibold text-stans-gold uppercase tracking-wider">
                    Our Story
                  </span>
                  <Link
                    to="/about"
                    className="block text-sm text-slate-200 hover:text-stans-gold pl-3"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/director-message"
                    className="block text-sm text-slate-200 hover:text-stans-gold pl-3"
                  >
                    Director's Message
                  </Link>
                </div>

                <div className="space-y-2">
                  <Link
                    to="/projects"
                    className="block text-xs font-semibold text-stans-gold uppercase tracking-wider"
                  >
                    Our Projects
                  </Link>
                  <div className="pl-3 space-y-1">
                    <span className="block text-[11px] text-stans-grey font-mono uppercase">Residential</span>
                    {projectsData.slice(0, 5).map((p) => (
                      <Link
                        key={p.id}
                        to={`/projects/${p.slug}`}
                        className="block text-sm text-slate-300 hover:text-stans-gold py-0.5"
                      >
                        {p.name} ({p.location})
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/gallery"
                  className="block text-lg font-serif font-bold text-white hover:text-stans-gold"
                >
                  Gallery & Press News
                </Link>

                <Link
                  to="/careers"
                  className="block text-lg font-serif font-bold text-white hover:text-stans-gold"
                >
                  Careers
                </Link>

                <Link
                  to="/contact"
                  className="block text-lg font-serif font-bold text-white hover:text-stans-gold"
                >
                  Contact Us / Reach Us
                </Link>
              </div>

              <div className="pt-6 border-t border-stans-slate/50 space-y-3">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setEnquiryModalOpen(true);
                  }}
                >
                  Enquiry Now
                </Button>
                <a
                  href={`tel:${companyDetails.contact.phone}`}
                  className="flex items-center justify-center gap-2 text-sm text-stans-gold border border-stans-gold/30 rounded-md py-2.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {companyDetails.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Quick Enquiry Modal */}
      <Modal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        title="Enquire with Stans Buildtech"
      >
        <EnquiryForm onSuccess={() => setTimeout(() => setEnquiryModalOpen(false), 3000)} />
      </Modal>
    </>
  );
}
