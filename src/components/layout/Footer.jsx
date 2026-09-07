import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, Truck, CreditCard, Headphones } from 'lucide-react';
import Logo from '../ui/Logo';
import { companyDetails } from '../../data/company';

export default function Footer() {
  return (
    <footer className="bg-stans-navy text-white pt-16 pb-8 border-t-2 border-stans-gold/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-stans-slate/60 text-center">
          <div className="flex flex-col items-center space-y-2 p-4 bg-stans-slate/50 rounded-xl border border-stans-gold/15">
            <ShieldCheck className="w-8 h-8 text-stans-gold" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">100% Genuine Products</h4>
            <p className="text-[11px] text-stans-grey">Full manufacturer brand warranty</p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4 bg-stans-slate/50 rounded-xl border border-stans-gold/15">
            <Truck className="w-8 h-8 text-stans-gold" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Express Shipping</h4>
            <p className="text-[11px] text-stans-grey">Insured fast doorstep delivery</p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4 bg-stans-slate/50 rounded-xl border border-stans-gold/15">
            <CreditCard className="w-8 h-8 text-stans-gold" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Secure Payment & GST</h4>
            <p className="text-[11px] text-stans-grey">UPI, Cards, EMI & GST Tax Invoices</p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4 bg-stans-slate/50 rounded-xl border border-stans-gold/15">
            <Headphones className="w-8 h-8 text-stans-gold" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Dedicated Tech Support</h4>
            <p className="text-[11px] text-stans-grey">Mon - Sat expert assistance</p>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stans-slate/60">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-xs md:text-sm text-stans-grey leading-relaxed max-w-sm">
              Your premier destination for high-performance laptops, custom gaming PCs, mechanical keyboards, studio monitors, ultra-fast SSD storage, and tech accessories.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-stans-gold text-base mb-4 tracking-wide uppercase">
              Store Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-stans-grey">
              <li>
                <Link to="/" className="hover:text-stans-gold transition-colors">Home Storefront</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-stans-gold transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-stans-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-stans-gold transition-colors">Contact Support</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-stans-gold transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-stans-gold transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-stans-gold transition-colors">Disclaimer</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h4 className="font-serif font-bold text-stans-gold text-base mb-4 tracking-wide uppercase">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-stans-grey">
              <li>
                <Link to="/shop?category=laptops" className="hover:text-stans-gold transition-colors">Laptops & Notebooks</Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="hover:text-stans-gold transition-colors">Mechanical Keyboards & Mice</Link>
              </li>
              <li>
                <Link to="/shop?category=monitors" className="hover:text-stans-gold transition-colors">QHD Curved Monitors</Link>
              </li>
              <li>
                <Link to="/shop?category=storage" className="hover:text-stans-gold transition-colors">NVMe SSDs & Storage</Link>
              </li>
              <li>
                <Link to="/shop?category=audio" className="hover:text-stans-gold transition-colors">Gaming Headsets & Audio</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Support Contact */}
          <div>
            <h4 className="font-serif font-bold text-stans-gold text-base mb-4 tracking-wide uppercase">
              Store Support
            </h4>
            <ul className="space-y-3 text-xs text-stans-grey">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stans-gold shrink-0 mt-0.5" />
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

        {/* Bottom Copyright & Legal Operator Notice */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-stans-grey gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-mono text-slate-300 font-medium">
              © 2026 Stans Buildtech. All Rights Reserved.
            </p>
            <p className="text-[11px] text-stans-grey/90">
              Stans Buildtech is a brand operated by Immense Smart Solutions.
            </p>
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
              Contact Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
