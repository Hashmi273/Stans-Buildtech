import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Youtube, Linkedin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import Logo from '../ui/Logo';
import { companyDetails } from '../../data/company';
import { projectsData } from '../../data/projects';

export default function Footer() {
  return (
    <footer className="bg-stans-navy text-white pt-16 pb-8 border-t-2 border-stans-gold/30 relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-stans-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stans-slate/60">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-stans-grey leading-relaxed max-w-sm">
              Shaping Mumbai's landscape with premium residential developments, engineering integrity, and community-first living solutions since 2008.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-stans-slate flex items-center justify-center text-stans-grey hover:text-stans-gold hover:bg-stans-light-slate transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-stans-slate flex items-center justify-center text-stans-grey hover:text-stans-gold hover:bg-stans-light-slate transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-stans-slate flex items-center justify-center text-stans-grey hover:text-stans-gold hover:bg-stans-light-slate transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-stans-slate flex items-center justify-center text-stans-grey hover:text-stans-gold hover:bg-stans-light-slate transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-stans-gold text-base mb-4 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-stans-grey">
              <li>
                <Link to="/" className="hover:text-stans-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-stans-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/director-message" className="hover:text-stans-gold transition-colors">Director's Message</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-stans-gold transition-colors">Our Projects</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-stans-gold transition-colors">Gallery & News</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-stans-gold transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-stans-gold transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-stans-gold transition-colors">Disclaimer</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-stans-gold transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-stans-gold transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Featured Projects */}
          <div>
            <h4 className="font-serif font-bold text-stans-gold text-base mb-4 tracking-wide uppercase">
              Featured Projects
            </h4>
            <ul className="space-y-2.5 text-sm text-stans-grey">
              {projectsData.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link to={`/projects/${p.slug}`} className="hover:text-stans-gold transition-colors flex items-center justify-between group">
                    <span>{p.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-stans-gold/50 group-hover:text-stans-gold transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Snippet */}
          <div>
            <h4 className="font-serif font-bold text-stans-gold text-base mb-4 tracking-wide uppercase">
              Head Office
            </h4>
            <ul className="space-y-3 text-sm text-stans-grey">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stans-gold shrink-0 mt-1" />
                <span className="leading-snug">{companyDetails.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-stans-gold shrink-0" />
                <a href={`tel:${companyDetails.contact.phone}`} className="hover:text-stans-gold transition-colors">
                  {companyDetails.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-stans-gold shrink-0" />
                <a href={`mailto:${companyDetails.contact.email}`} className="hover:text-stans-gold transition-colors">
                  {companyDetails.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* MahaRERA Compliance Disclaimer Note */}
        <div className="py-6 border-b border-stans-slate/40 text-center">
          <p className="text-[11px] text-stans-grey/80 leading-relaxed max-w-4xl mx-auto">
            Disclaimer: All project renderings, floor plans, and specifications depicted on this website are conceptual and representational only. The developer reserves the right to amend plans, layouts, and specifications without prior notice. Please verify project registration details on the MahaRERA website (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="underline hover:text-stans-gold">maharera.mahaonline.gov.in</a>).
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-stans-grey gap-4">
          <div className="font-mono text-slate-300 font-medium">
            {companyDetails.copyright}
          </div>
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-stans-grey">
            <Link to="/privacy-policy" className="hover:text-stans-gold transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-stans-gold transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/disclaimer" className="hover:text-stans-gold transition-colors">
              Disclaimer
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-stans-gold transition-colors">
              Reach Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
