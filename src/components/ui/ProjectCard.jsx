import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Home, CheckCircle, Sparkles } from 'lucide-react';

/**
 * Reusable ProjectCard component for listing projects.
 */
export default function ProjectCard({ project, className = '' }) {
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'ongoing':
        return 'bg-stans-gold text-white';
      case 'ready':
        return 'bg-emerald-600 text-white';
      case 'upcoming':
        return 'bg-stans-navy text-stans-gold border border-stans-gold/40';
      case 'current':
        return 'bg-blue-600 text-white';
      default:
        return 'bg-stans-slate text-white';
    }
  };

  return (
    <div className={`group bg-white rounded-xl overflow-hidden shadow-luxury border border-stans-gold/10 hover:border-stans-gold/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stans-navy">
        <img
          src={project.cardImage || project.heroImage}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stans-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full shadow-md ${getBadgeStyle(project.status)}`}>
            {project.status === 'ready' && <CheckCircle className="w-3 h-3" />}
            {project.status === 'ongoing' && <Sparkles className="w-3 h-3" />}
            {project.statusLabel || project.status}
          </span>
        </div>

        {/* Category Pill */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider bg-white/90 backdrop-blur-md text-stans-navy rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-stans-gold font-medium mb-1.5 uppercase tracking-wide">
            <MapPin className="w-3.5 h-3.5" />
            <span>{project.location}</span>
          </div>

          <h3 className="text-xl font-serif font-bold text-stans-navy group-hover:text-stans-gold transition-colors mb-2">
            {project.name}
          </h3>

          <p className="text-xs text-stans-slate/75 line-clamp-2 leading-relaxed mb-4">
            {project.tagline || project.description}
          </p>

          <div className="flex items-center gap-2 text-xs font-medium text-stans-navy/80 pt-3 border-t border-stans-offwhite">
            <Home className="w-3.5 h-3.5 text-stans-gold" />
            <span>{project.configuration}</span>
          </div>
        </div>

        {/* Card Footer CTA */}
        <div className="mt-6 pt-4 border-t border-stans-offwhite flex items-center justify-between">
          <span className="text-[11px] text-stans-grey font-mono">
            {project.possession}
          </span>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-stans-gold hover:text-stans-gold-hover transition-colors group/link"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
