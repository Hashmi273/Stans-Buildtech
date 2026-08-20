import React, { useState } from 'react';
import { Newspaper, Eye, Sparkles, X } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Modal from '../components/ui/Modal';
import { galleryData } from '../data/gallery';

export default function GalleryNews() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryData.items
    : galleryData.items.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-28 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Media & Site Progress
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Gallery & News Archive
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            Browse high-resolution site progress photos, architecture renderings, and press announcements.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {galleryData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-stans-gold text-white shadow-gold-glow'
                  : 'bg-white text-stans-navy hover:bg-stans-offwhite border border-stans-slate/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-luxury border border-stans-gold/15 group hover:border-stans-gold/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-stans-navy cursor-pointer" onClick={() => setLightboxImage(item)}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stans-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-stans-gold text-white flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-stans-gold mb-2">
                    <span>{item.category}</span>
                    <span className="text-stans-grey font-mono">{item.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-stans-navy group-hover:text-stans-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stans-slate/75 leading-relaxed mt-2">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-stans-offwhite flex items-center justify-between">
                  <button
                    onClick={() => setLightboxImage(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-stans-gold hover:text-stans-gold-hover transition-colors"
                  >
                    <span>View Image & Details</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <Modal
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        maxWidth="max-w-3xl"
        title={lightboxImage?.title || 'Gallery Preview'}
      >
        {lightboxImage && (
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden bg-stans-navy max-h-[60vh]">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stans-gold bg-stans-gold-light px-2.5 py-1 rounded">
                {lightboxImage.category} • {lightboxImage.date}
              </span>
              <p className="text-sm text-stans-slate leading-relaxed">
                {lightboxImage.summary}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
