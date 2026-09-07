import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Truck,
  Award,
  Zap,
  Laptop,
  Keyboard,
  Monitor,
  HardDrive,
  Headphones,
  ShoppingBag,
  Sparkles,
  Percent
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { productsData } from '../data/products';
import { companyDetails } from '../data/company';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Next-Gen Performance Laptops',
      subtitle: 'Stans ProBook V15 Ultra — Intel Core i7 13th Gen, 16GB DDR5, 512GB NVMe SSD.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1920&q=80',
      price: '₹64,999',
      originalPrice: '₹79,999',
      link: '/product/stans-probook-v15',
      tag: 'Festive Offer • 18% OFF'
    },
    {
      title: 'Dominate AAA Gaming & Esports',
      subtitle: 'Stans Predator X — RTX 4060 8GB, Ryzen 7 7840HS, 16" 165Hz QHD Display.',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1920&q=80',
      price: '₹98,999',
      originalPrice: '₹1,19,999',
      link: '/product/stans-gaming-beast-rtx4060',
      tag: 'RTX 40 Series Power'
    },
    {
      title: 'Tactile Speed & Custom RGB',
      subtitle: 'Stans CyberKey Mechanical Keyboard — Hot-swappable Switches & PBT Keycaps.',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1920&q=80',
      price: '₹3,499',
      originalPrice: '₹5,999',
      link: '/product/stans-mech-keyboard-rgb',
      tag: 'Save 41%'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const featuredLaptops = productsData.filter((p) => p.category === 'laptops');
  const bestSellers = productsData.filter((p) => p.badge || p.discountPercent > 20);

  const categories = [
    { title: 'Laptops & Notebooks', count: '12+ Models', icon: Laptop, path: '/shop?category=laptops' },
    { title: 'Mechanical Keyboards', count: '18+ Custom Keyboards', icon: Keyboard, path: '/shop?category=accessories' },
    { title: 'QHD Gaming Monitors', count: '10+ Curved Monitors', icon: Monitor, path: '/shop?category=monitors' },
    { title: 'NVMe SSDs & Drives', count: 'Gen4 7400MB/s SSDs', icon: HardDrive, path: '/shop?category=storage' },
    { title: 'Gaming Headsets', count: '7.1 Spatial Audio', icon: Headphones, path: '/shop?category=audio' }
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      
      {/* 1. HERO TECH SLIDER BANNER */}
      <section className="relative h-[75vh] min-h-[500px] max-h-[720px] w-full overflow-hidden bg-stans-navy -mt-24 md:-mt-32">
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
              className="w-full h-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stans-navy/95 via-stans-navy/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-stans-navy via-transparent to-black/30" />

            <div className="absolute inset-0 flex items-center z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="max-w-2xl text-white space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-stans-gold text-white rounded-md text-xs font-bold uppercase tracking-wider shadow-md">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{slide.tag}</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
                    {slide.title}
                  </h1>

                  <p className="text-sm md:text-lg text-stans-grey leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="font-serif font-bold text-2xl text-stans-gold">
                      {slide.price} <span className="text-sm text-stans-grey font-normal line-through">{slide.originalPrice}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Button to={slide.link} variant="primary" size="lg" icon={ShoppingBag}>
                      Buy Now
                    </Button>
                    <Button to="/shop" variant="outline-light" size="lg">
                      Explore All Store Deals
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
      </section>

      {/* 2. CATEGORY TILES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Hardware Categories"
          title="Explore Computing & Tech Gear"
          subtitle="Discover premium laptops, custom mechanical keyboards, high refresh-rate monitors, and SSD storage."
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat, idx) => {
            const IconC = cat.icon;
            return (
              <Link
                key={idx}
                to={cat.path}
                className="bg-white p-6 rounded-2xl border border-stans-gold/15 shadow-luxury hover:border-stans-gold hover:-translate-y-1 transition-all duration-300 text-center space-y-3 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-stans-gold-light text-stans-gold flex items-center justify-center mx-auto group-hover:bg-stans-gold group-hover:text-white transition-colors">
                  <IconC className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-sm text-stans-navy group-hover:text-stans-gold transition-colors">
                  {cat.title}
                </h3>
                <span className="text-[11px] font-medium text-stans-grey block">
                  {cat.count}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED LAPTOPS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            eyebrow="Flagship Notebooks"
            title="Laptops & Gaming Rigs"
            subtitle="High-performance laptops for creators, engineers, enterprise professionals, and gamers."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0">
            <Button to="/shop?category=laptops" variant="outline" size="md" icon={ArrowRight}>
              View All Laptops
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredLaptops.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. BEST SELLERS & ACCESSORIES GRID */}
      <section className="bg-stans-navy text-white py-20 border-y border-stans-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Trending Gear"
            title="Top Rated Computer Accessories"
            subtitle="Mechanical keyboards, ergonomic mice, Gen4 SSDs, curved monitors, and USB-C docks."
            light
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRAND OPERATOR NOTICE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-stans-gold-light p-8 md:p-12 rounded-3xl border border-stans-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-stans-gold text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-xl text-stans-navy">Authentic & GST Verified Retail</h3>
              <p className="text-xs md:text-sm text-stans-slate/90 leading-relaxed max-w-2xl font-medium">
                {companyDetails.about.statement}
              </p>
              <p className="text-[11px] text-stans-grey font-mono">
                Official Brand Guarantee • 100% Tax Invoice Support
              </p>
            </div>
          </div>
          <Button to="/about" variant="primary" size="md">
            Learn About Stans Tech
          </Button>
        </div>
      </section>

    </div>
  );
}
