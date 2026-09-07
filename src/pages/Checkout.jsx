import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, CreditCard, Truck, FileText, ArrowRight, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [needGst, setNeedGst] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    pincode: '',
    address: '',
    city: 'Mumbai',
    state: 'Maharashtra',
    gstName: '',
    gstin: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.address.trim() || !formData.pincode.trim()) {
      setErrorMsg('Please complete your delivery shipping address.');
      return;
    }
    if (!formData.consent) {
      setErrorMsg('Please accept the communication consent checkbox to proceed.');
      return;
    }

    setIsSubmitting(true);
    const timestamp = new Date().toISOString();
    const orderId = 'STANS-' + Math.floor(100000 + Math.random() * 900000);

    const payload = {
      orderId,
      items: cart,
      totalAmount: cartTotal,
      customer: formData,
      paymentMethod,
      consentGivenAt: timestamp
    };

    setTimeout(() => {
      console.log('--- E-COMMERCE ORDER PLACED PAYLOAD ---', payload);
      setIsSubmitting(false);
      setSubmitted(true);
      setOrderDetails(payload);
      clearCart();
    }, 1000);
  };

  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(cartTotal);

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-luxury border-2 border-stans-gold/30 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stans-gold bg-stans-gold-light px-3 py-1 rounded">
              Order Confirmed • #{orderDetails?.orderId}
            </span>
            <h2 className="font-serif text-3xl font-bold text-stans-navy">
              Thank You, {orderDetails?.customer.fullName}!
            </h2>
            <p className="text-sm text-stans-slate max-w-md mx-auto leading-relaxed">
              Your computer hardware order has been successfully placed. A confirmation email and tracking link will be dispatched to <strong>{orderDetails?.customer.email}</strong>.
            </p>
          </div>

          <div className="p-4 bg-stans-offwhite rounded-2xl border text-left text-xs text-stans-navy space-y-2 max-w-md mx-auto font-mono">
            <div className="flex justify-between border-b pb-1">
              <span>Order Reference:</span>
              <span className="font-bold">{orderDetails?.orderId}</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span>Payment Mode:</span>
              <span className="font-bold uppercase">{orderDetails?.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span>Consent Logged:</span>
              <span className="font-bold">{new Date(orderDetails?.consentGivenAt).toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stans-gold hover:bg-stans-gold-hover text-white text-xs font-bold rounded-lg uppercase tracking-wider shadow-md"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-stans-navy text-white py-16 md:py-20 border-b border-stans-gold/20 -mt-24 md:-mt-32 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-stans-gold">
            Checkout & Shipping
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Complete Your Tech Order
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stans-grey leading-relaxed">
            Enter your delivery address and payment preferences for express dispatch.
          </p>
        </div>
      </section>

      {/* Main Form & Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Shipping & Payment Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Delivery Address Form */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-luxury border border-stans-gold/20 space-y-6">
              <h3 className="font-serif text-xl font-bold text-stans-navy pb-3 border-b border-stans-offwhite flex items-center gap-2">
                <Truck className="w-5 h-5 text-stans-gold" />
                <span>1. Shipping & Contact Details</span>
              </h3>

              {errorMsg && (
                <div className="p-3 bg-rose-50 text-rose-700 text-xs rounded-lg border border-rose-200">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Vikram Mehta"
                    className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 bg-stans-offwhite border border-r-0 border-stans-slate/20 rounded-l-md text-xs font-bold text-stans-navy">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="98200 12345"
                        className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-r-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vikram@example.com"
                      className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">
                    Street Address & Flat / Building *
                  </label>
                  <textarea
                    name="address"
                    rows={2}
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. Flat 402, Stans Horizon, Link Road..."
                    className="w-full px-4 py-2.5 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-sm text-stans-navy focus:outline-none focus:border-stans-gold resize-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">Pincode *</label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="400064"
                      className="w-full px-3 py-2 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-xs text-stans-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-xs text-stans-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stans-navy uppercase tracking-wider mb-1">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-stans-offwhite/50 border border-stans-slate/20 rounded-md text-xs text-stans-navy"
                    />
                  </div>
                </div>
              </div>

              {/* GST Tax Invoice Optional Toggle */}
              <div className="pt-4 border-t border-stans-offwhite space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needGst}
                    onChange={(e) => setNeedGst(e.target.checked)}
                    className="w-4 h-4 text-stans-gold rounded accent-stans-gold"
                  />
                  <span className="text-xs font-bold text-stans-navy flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-stans-gold" />
                    Request Business GST Tax Invoice for Input Credit
                  </span>
                </label>

                {needGst && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-stans-offwhite rounded-xl border border-stans-slate/20 animate-in fade-in">
                    <div>
                      <label className="block text-xs font-semibold text-stans-navy mb-1">Business Name</label>
                      <input
                        type="text"
                        name="gstName"
                        value={formData.gstName}
                        onChange={handleChange}
                        placeholder="Company Legal Name"
                        className="w-full px-3 py-2 bg-white border border-stans-slate/20 rounded text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stans-navy mb-1">GSTIN Number</label>
                      <input
                        type="text"
                        name="gstin"
                        value={formData.gstin}
                        onChange={handleChange}
                        placeholder="27AAAAA0000A1Z5"
                        className="w-full px-3 py-2 bg-white border border-stans-slate/20 rounded text-xs uppercase"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-luxury border border-stans-gold/20 space-y-4">
              <h3 className="font-serif text-xl font-bold text-stans-navy pb-3 border-b border-stans-offwhite flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-stans-gold" />
                <span>2. Select Payment Method</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-stans-gold bg-stans-gold-light text-stans-navy shadow-sm'
                      : 'border-stans-slate/20 bg-white text-stans-slate'
                  }`}
                >
                  UPI / GPay / PhonePe
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                    paymentMethod === 'card'
                      ? 'border-stans-gold bg-stans-gold-light text-stans-navy shadow-sm'
                      : 'border-stans-slate/20 bg-white text-stans-slate'
                  }`}
                >
                  Credit / Debit Card
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                    paymentMethod === 'netbanking'
                      ? 'border-stans-gold bg-stans-gold-light text-stans-navy shadow-sm'
                      : 'border-stans-slate/20 bg-white text-stans-slate'
                  }`}
                >
                  Net Banking
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-stans-gold bg-stans-gold-light text-stans-navy shadow-sm'
                      : 'border-stans-slate/20 bg-white text-stans-slate'
                  }`}
                >
                  Cash on Delivery
                </button>
              </div>

              {/* Exact Required Consent Checkbox */}
              <div className="pt-4 border-t border-stans-offwhite">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 text-stans-gold rounded border-stans-slate/30 focus:ring-stans-gold accent-stans-gold"
                  />
                  <span className="text-[11px] text-stans-slate/80 leading-snug group-hover:text-stans-navy transition-colors">
                    I agree to be contacted by Stans Buildtech / Immense Smart Solutions regarding property enquiries, project information, offers and related services through Call, SMS, WhatsApp or Email.
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary Box */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-luxury border-2 border-stans-gold/30 sticky top-36 space-y-6">
              <h3 className="font-serif text-xl font-bold text-stans-navy pb-3 border-b border-stans-offwhite">
                Order Summary ({cart.length} items)
              </h3>

              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div key={item.product.id} className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2">
                        <img src={item.product.image} alt={item.product.name} className="w-10 h-10 object-contain border rounded p-1" />
                        <div>
                          <span className="font-bold text-stans-navy block line-clamp-1">{item.product.name}</span>
                          <span className="text-stans-grey font-mono">Qty: {item.qty}</span>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-stans-navy">
                        ₹{(item.product.price * item.qty).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-stans-grey text-center py-4">No items in cart</div>
                )}
              </div>

              <div className="pt-4 border-t border-stans-offwhite space-y-2 text-xs text-stans-slate">
                <div className="flex justify-between">
                  <span>Items Total:</span>
                  <span className="font-semibold text-stans-navy">{formattedTotal}</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Shipping & Delivery:</span>
                  <span>FREE Express</span>
                </div>
                <div className="flex justify-between font-serif font-bold text-lg text-stans-navy pt-2 border-t border-stans-offwhite">
                  <span>Total Payable:</span>
                  <span className="text-stans-gold">{formattedTotal}</span>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting || cart.length === 0}
                className="w-full shadow-lg"
                icon={Lock}
              >
                {isSubmitting ? 'Placing Order...' : 'Place Secure Order'}
              </Button>
            </div>
          </div>

        </form>
      </section>
    </div>
  );
}
