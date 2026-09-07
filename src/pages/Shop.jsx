import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ProductCard from '../components/ui/ProductCard';
import { productsData, productCategories } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchQuery, setSearchQuery } = useCart();
  
  const categoryParam = searchParams.get('category') || 'all';
  const urlSearchParam = searchParams.get('search') || '';

  const [selectedCat, setSelectedCat] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'rating'

  // Filter products based on category, search query, and sorting
  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // Filter by Category
    if (selectedCat !== 'all') {
      result = result.filter((p) => p.category === selectedCat);
    }

    // Filter by Search Query
    const query = (urlSearchParam || searchQuery).toLowerCase().trim();
    if (query) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.categoryLabel.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Sort Products
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCat, searchQuery, urlSearchParam, sortBy]);

  const handleCategoryChange = (catId) => {
    setSelectedCat(catId);
    setSearchParams(catId === 'all' ? {} : { category: catId });
  };

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-32 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Computer Store Catalog
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Laptops & Tech Accessories Shop
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            Browse 100% genuine laptops, gaming rigs, mechanical keyboards, monitors, NVMe SSDs, and peripherals.
          </p>
        </div>
      </section>

      {/* Catalog & Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Category Tabs & Filter Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-luxury border border-stans-gold/15">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 ${
                  selectedCat === cat.id
                    ? 'bg-stans-gold text-white shadow-gold-glow'
                    : 'bg-stans-offwhite text-stans-navy hover:bg-stans-gold-light'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-stans-gold" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 bg-stans-offwhite border border-stans-slate/20 rounded-lg text-xs font-medium text-stans-navy focus:outline-none focus:border-stans-gold"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stans-slate">
          <span>Showing <strong>{filteredProducts.length}</strong> products</span>
          {(selectedCat !== 'all' || searchQuery || urlSearchParam) && (
            <button
              onClick={() => {
                setSelectedCat('all');
                setSearchQuery('');
                setSearchParams({});
              }}
              className="text-stans-gold hover:underline font-semibold"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-stans-gold/20 p-8 space-y-4">
            <Search className="w-12 h-12 text-stans-grey mx-auto opacity-40" />
            <h3 className="font-serif text-xl font-bold text-stans-navy">No Products Match Your Search</h3>
            <p className="text-xs text-stans-slate">Try searching for another term like "laptops", "SSD", "keyboard", or "monitor".</p>
          </div>
        )}
      </section>
    </div>
  );
}
