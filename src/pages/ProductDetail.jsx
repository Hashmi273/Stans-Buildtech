import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ShoppingCart,
  Heart,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  Share2,
  Zap,
  ArrowRight
} from 'lucide-react';
import { productsData } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [qty, setQty] = useState(1);

  // Find product by id or fallback to first product
  const product = productsData.find((p) => p.id === id || p.slug === id) || productsData[0];
  const isWishlisted = wishlist.includes(product.id);

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.price * qty);

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(product.originalPrice * qty)
    : null;

  const handleBuyNow = () => {
    addToCart(product, qty);
    navigate('/checkout');
  };

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 text-xs text-stans-slate">
        <Link to="/" className="hover:text-stans-gold">Home</Link>
        <span className="mx-2">•</span>
        <Link to="/shop" className="hover:text-stans-gold">Shop</Link>
        <span className="mx-2">•</span>
        <span className="text-stans-navy font-medium">{product.name}</span>
      </div>

      {/* Main Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-luxury border border-stans-gold/20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-6 bg-stans-offwhite rounded-2xl p-8 flex items-center justify-center relative border border-stans-slate/10">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 md:h-96 object-contain"
            />

            {product.discountPercent && (
              <div className="absolute top-4 left-4 bg-rose-600 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-md">
                -{product.discountPercent}% OFF
              </div>
            )}

            <button
              onClick={() => toggleWishlist(product.id)}
              className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-colors ${
                isWishlisted
                  ? 'bg-rose-500 text-white'
                  : 'bg-white text-stans-slate hover:bg-rose-500 hover:text-white'
              }`}
            >
              <Heart className="w-5 h-5 fill-current" />
            </button>
          </div>

          {/* Right Column: Buying Options & Spec Summary */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stans-gold bg-stans-gold-light px-2.5 py-1 rounded">
                  {product.brand} • {product.categoryLabel}
                </span>
                {product.inStock && (
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> In Stock ({product.stockCount} left)
                  </span>
                )}
              </div>

              <h1 className="font-serif text-2xl md:text-3xl font-bold text-stans-navy">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 text-xs">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-stans-navy">{product.rating}</span>
                <span className="text-stans-grey">({product.reviewsCount} customer reviews)</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 bg-stans-offwhite rounded-xl border border-stans-slate/15 flex items-baseline gap-3">
              <span className="font-serif text-3xl font-bold text-stans-navy">{formattedPrice}</span>
              {formattedOriginalPrice && (
                <span className="text-sm text-stans-grey line-through font-medium">{formattedOriginalPrice}</span>
              )}
              <span className="text-xs text-stans-grey font-mono ml-auto">Inclusive of all taxes & GST</span>
            </div>

            <p className="text-xs md:text-sm text-stans-slate leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector & CTAs */}
            <div className="space-y-4 pt-2 border-t border-stans-offwhite">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-stans-navy">Quantity:</span>
                <div className="flex items-center border border-stans-slate/20 rounded-lg bg-stans-offwhite overflow-hidden">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-3 py-1.5 text-sm font-bold hover:bg-stans-slate/10 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-sm font-bold text-stans-navy">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-1.5 text-sm font-bold hover:bg-stans-slate/10 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => addToCart(product, qty)}
                  icon={ShoppingCart}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleBuyNow}
                  icon={Zap}
                >
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-stans-offwhite text-center text-[11px] text-stans-slate">
              <div className="p-2 bg-stans-offwhite rounded-lg space-y-1">
                <ShieldCheck className="w-4 h-4 text-stans-gold mx-auto" />
                <span className="font-semibold block">100% Genuine</span>
              </div>
              <div className="p-2 bg-stans-offwhite rounded-lg space-y-1">
                <Truck className="w-4 h-4 text-stans-gold mx-auto" />
                <span className="font-semibold block">Free Shipping</span>
              </div>
              <div className="p-2 bg-stans-offwhite rounded-lg space-y-1">
                <RotateCcw className="w-4 h-4 text-stans-gold mx-auto" />
                <span className="font-semibold block">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Sheet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-luxury border border-stans-gold/20 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-stans-navy pb-3 border-b border-stans-offwhite">
            Technical Specifications Sheet
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {Object.entries(product.specs || {}).map(([key, val]) => (
              <div key={key} className="flex justify-between py-2 border-b border-stans-offwhite text-xs md:text-sm">
                <span className="font-semibold text-stans-grey">{key}:</span>
                <span className="font-bold text-stans-navy text-right max-w-xs">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
