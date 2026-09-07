import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye, Star, CheckCircle, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Modal from './Modal';
import Button from './Button';

export default function ProductCard({ product, className = '' }) {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const isWishlisted = wishlist.includes(product.id);

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.price);

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(product.originalPrice)
    : null;

  return (
    <>
      <div className={`group bg-white rounded-2xl overflow-hidden shadow-luxury border border-stans-gold/15 hover:border-stans-gold transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${className}`}>
        
        {/* Thumbnail & Badges Container */}
        <div className="relative aspect-[4/3] bg-stans-offwhite overflow-hidden p-4 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Discount Badge */}
          {product.discountPercent && (
            <div className="absolute top-3 left-3 bg-rose-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md">
              -{product.discountPercent}% OFF
            </div>
          )}

          {/* Feature Badge */}
          {product.badge && (
            <div className="absolute top-3 right-3 bg-stans-navy text-stans-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-stans-gold/30">
              {product.badge}
            </div>
          )}

          {/* Quick Action Overlay Buttons */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => setQuickViewOpen(true)}
              className="p-2.5 rounded-full bg-white text-stans-navy shadow-lg hover:bg-stans-gold hover:text-white transition-colors"
              title="Quick View Specs"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`p-2.5 rounded-full shadow-lg transition-colors ${
                isWishlisted
                  ? 'bg-rose-500 text-white'
                  : 'bg-white text-stans-slate hover:bg-rose-500 hover:text-white'
              }`}
              title="Wishlist"
            >
              <Heart className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 flex-1 flex flex-col justify-between bg-white space-y-4">
          <div className="space-y-2">
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs text-stans-grey">
              <span className="font-semibold uppercase tracking-wider text-stans-gold">
                {product.categoryLabel || product.category}
              </span>
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{product.rating}</span>
                <span className="text-stans-grey font-normal">({product.reviewsCount})</span>
              </div>
            </div>

            {/* Title */}
            <Link to={`/product/${product.id}`} className="block">
              <h3 className="font-serif font-bold text-base text-stans-navy hover:text-stans-gold transition-colors line-clamp-1">
                {product.name}
              </h3>
            </Link>

            {/* Tagline / Key Spec */}
            <p className="text-xs text-stans-slate/75 line-clamp-2 leading-relaxed">
              {product.tagline}
            </p>
          </div>

          {/* Pricing & Add to Cart Action */}
          <div className="pt-3 border-t border-stans-offwhite flex items-center justify-between gap-2">
            <div>
              <div className="font-serif font-bold text-lg text-stans-navy">
                {formattedPrice}
              </div>
              {formattedOriginalPrice && (
                <div className="text-xs text-stans-grey line-through">
                  {formattedOriginalPrice}
                </div>
              )}
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => addToCart(product)}
              icon={ShoppingCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <Modal
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
        maxWidth="max-w-2xl"
        title={product.name}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="bg-stans-offwhite p-4 rounded-xl flex items-center justify-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
          </div>

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-stans-gold bg-stans-gold-light px-2.5 py-1 rounded">
              {product.brand} • {product.categoryLabel}
            </span>

            <h3 className="font-serif font-bold text-xl text-stans-navy">{product.name}</h3>

            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl font-bold text-stans-navy">{formattedPrice}</span>
              {formattedOriginalPrice && (
                <span className="text-sm text-stans-grey line-through">{formattedOriginalPrice}</span>
              )}
            </div>

            <p className="text-xs text-stans-slate leading-relaxed">{product.description}</p>

            <div className="space-y-1.5 pt-2 border-t border-stans-offwhite">
              <span className="text-xs font-bold text-stans-navy uppercase tracking-wider">Key Specifications:</span>
              <ul className="text-xs text-stans-slate space-y-1">
                {Object.entries(product.specs || {}).slice(0, 4).map(([key, val]) => (
                  <li key={key} className="flex justify-between border-b border-stans-offwhite py-0.5">
                    <span className="font-medium text-stans-grey">{key}:</span>
                    <span className="font-semibold text-stans-navy">{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 flex gap-3">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  addToCart(product);
                  setQuickViewOpen(false);
                }}
                icon={ShoppingCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
