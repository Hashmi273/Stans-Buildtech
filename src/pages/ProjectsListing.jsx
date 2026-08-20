import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import { projectsData } from '../data/projects';

export default function ProjectsListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'all';

  const filterTabs = [
    { id: 'all', label: 'All Developments' },
    { id: 'ongoing', label: 'Ongoing Residential' },
    { id: 'ready', label: 'Ready to Move' },
    { id: 'upcoming', label: 'Upcoming Residential' },
    { id: 'commercial', label: 'Commercial Projects' }
  ];

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projectsData;
    if (activeTab === 'commercial') return projectsData.filter((p) => p.category === 'commercial');
    return projectsData.filter((p) => p.status === activeTab);
  }, [activeTab]);

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-28 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Our Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Residential & Commercial Projects
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            Discover landmark luxury residences, ready-to-move homes, and commercial hubs crafted across prime Mumbai locations.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Filter Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12 border-b border-stans-slate/20 pb-4">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSearchParams({ tab: tab.id })}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-stans-gold text-white shadow-gold-glow'
                  : 'bg-white text-stans-navy hover:bg-stans-offwhite border border-stans-slate/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stans-gold/20 p-8 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-stans-navy">No Projects Match Selected Category</h3>
            <p className="text-sm text-stans-grey">Please select another tab above to explore our development portfolio.</p>
          </div>
        )}
      </section>
    </div>
  );
}
