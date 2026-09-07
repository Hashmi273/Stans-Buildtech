import React from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQty, cartTotal, cartCount } = useCart();

  if (!isCartOpen) return null;

  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(cartTotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stans-navy/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-stans-gold/20 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 bg-stans-navy text-white flex items-center justify-between border-b border-stans-gold/20">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-stans-gold" />
              <h2 className="font-serif text-lg font-bold text-white tracking-wide">
                Your Tech Cart ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full text-stans-grey hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {cart.length > 0 ? (
              cart.map((item) => {
                const itemPrice = new Intl.NumberFormat('en-IN', {
                  style: 'currency',
                  currency: 'INR',
                  maximumFractionDigits: 0
                }).format(item.product.price * item.qty);

                return (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 bg-stans-offwhite/60 rounded-xl border border-stans-slate/10 items-center justify-between"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain bg-white rounded-lg p-1 border"
                    />

                    <div className="flex-1 space-y-1">
                      <h4 className="text-xs font-serif font-bold text-stans-navy line-clamp-1">
                        {item.product.name}
                      </h4>
                      <div className="text-xs font-semibold text-stans-gold">{itemPrice}</div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => updateQty(item.product.id, -1)}
                          className="w-6 h-6 rounded bg-white border border-stans-slate/20 flex items-center justify-center text-stans-navy hover:bg-stans-gold hover:text-white transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-stans-navy px-1">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.product.id, 1)}
                          className="w-6 h-6 rounded bg-white border border-stans-slate/20 flex items-center justify-center text-stans-navy hover:bg-stans-gold hover:text-white transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-1.5 text-stans-grey hover:text-rose-500 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-stans-grey mx-auto opacity-50" />
                <h3 className="font-serif text-lg font-bold text-stans-navy">Your Cart is Empty</h3>
                <p className="text-xs text-stans-slate/75">
                  Explore our range of laptops, keyboards, monitors & accessories.
                </p>
              </div>
            )}
          </div>

          {/* Footer Summary & Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-6 bg-stans-offwhite border-t border-stans-slate/20 space-y-4">
              <div className="space-y-1.5 text-xs text-stans-slate">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-stans-navy">{formattedTotal}</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Express Shipping:</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between text-[11px] text-stans-grey">
                  <span>GST Tax Invoice:</span>
                  <span>Included</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stans-slate/20 flex justify-between items-center">
                <span className="font-serif font-bold text-stans-navy text-base">Grand Total:</span>
                <span className="font-serif font-bold text-stans-gold text-xl">{formattedTotal}</span>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-stans-gold hover:bg-stans-gold-hover text-white font-semibold text-sm rounded-lg shadow-gold-glow transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center justify-center gap-1 text-[11px] text-stans-grey">
                  <ShieldCheck className="w-3.5 h-3.5 text-stans-gold" />
                  <span>Secure 256-bit Encrypted Checkout</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
