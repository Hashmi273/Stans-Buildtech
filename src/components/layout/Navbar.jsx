import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  ShoppingBag,
  Heart,
  Phone,
  Mail,
  Menu,
  X,
  Laptop,
  Keyboard,
  Monitor,
  HardDrive,
  Headphones,
  Grid
} from 'lucide-react';
import Logo from '../ui/Logo';
import { useCart } from '../../context/CartContext';
import { companyDetails } from '../../data/company';

export default function Navbar() {
  const { cartCount, setIsCartOpen, searchQuery, setSearchQuery, wishlist } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const navCategories = [
    { label: 'All Products', path: '/shop' },
    { label: 'Laptops', path: '/shop?category=laptops' },
    { label: 'Keyboards & Mice', path: '/shop?category=accessories' },
    { label: 'Monitors', path: '/shop?category=monitors' },
    { label: 'SSDs & Storage', path: '/shop?category=storage' },
    { label: 'Audio', path: '/shop?category=audio' }
  ];

  return (
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
              <span>Support: {companyDetails.contact.phone}</span>
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
            <span className="text-[11px] text-stans-gold font-medium">
              ⚡ Free Express Delivery Across India | 100% Genuine Brand Warranty
            </span>
            <Link to="/contact" className="hover:text-stans-gold transition-colors">
              Store Locator
            </Link>
          </div>
        </div>
      </div>

      {/* Main E-Commerce Navbar */}
      <nav className="bg-stans-navy text-white py-3.5 border-b border-stans-slate/40 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Logo variant="light" />

          {/* Live Search Bar (Desktop) */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search laptops, mechanical keyboards, SSDs, monitors..."
                className="w-full pl-10 pr-4 py-2 bg-stans-slate border border-stans-gold/30 rounded-full text-xs text-white placeholder-stans-grey focus:outline-none focus:border-stans-gold transition-colors"
              />
              <Search className="w-4 h-4 text-stans-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </form>

          {/* Action Controls */}
          <div className="flex items-center gap-4">
            {/* Wishlist Button */}
            <Link
              to="/shop"
              className="relative p-2 text-slate-200 hover:text-stans-gold transition-colors hidden sm:block"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Counter Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 bg-stans-gold hover:bg-stans-gold-hover text-white rounded-full text-xs font-semibold shadow-gold-glow transition-all"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-white text-stans-navy font-bold rounded-full w-4 h-4 text-[10px] flex items-center justify-center border border-stans-gold">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">Cart ({cartCount})</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-stans-gold focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Secondary Category Sub-Bar (Desktop) */}
        <div className="hidden md:block bg-stans-slate/80 border-t border-stans-slate/40 mt-3 py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-medium text-slate-300">
            <div className="flex items-center gap-8">
              {navCategories.map((cat, idx) => (
                <Link
                  key={idx}
                  to={cat.path}
                  className={`hover:text-stans-gold transition-colors ${
                    location.search.includes(cat.path.split('?')[1] || 'never')
                      ? 'text-stans-gold font-bold'
                      : ''
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Link to="/about" className="hover:text-stans-gold transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-stans-gold transition-colors">
                Contact & Support
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-stans-navy/98 backdrop-blur-xl z-50 p-6 overflow-y-auto space-y-6">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search laptops & accessories..."
              className="w-full pl-10 pr-4 py-2.5 bg-stans-slate border border-stans-gold/30 rounded-lg text-sm text-white focus:outline-none"
            />
            <Search className="w-4 h-4 text-stans-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
          </form>

          <div className="space-y-4">
            <span className="block text-xs font-bold text-stans-gold uppercase tracking-wider">
              Browse Store Categories
            </span>
            {navCategories.map((cat, idx) => (
              <Link
                key={idx}
                to={cat.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-slate-200 hover:text-stans-gold py-1"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-stans-slate/50 space-y-3">
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300"
            >
              About Stans Buildtech
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
