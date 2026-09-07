import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { CartProvider } from '../../context/CartContext';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-stans-offwhite text-stans-navy font-sans antialiased">
        <Navbar />
        <main className="flex-1 pt-24 md:pt-32">
          {children}
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
