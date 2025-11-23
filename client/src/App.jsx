import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CartPage from './pages/Cart';
import Checkout from './pages/Checkout';
import ThankYou from './pages/Thankyou';
import { CartProvider } from './context/CartContext';
import './index.css';

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <header className="site-header glass">
          <div className="header-inner container">
            <Link to="/" className="brand">
              <h1 className="logo-title">ROYALIFY</h1>
              <small className="tagline">Where Rarity Reigns</small>
            </Link>

            <nav className="nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/shop" className="nav-link">Shop</Link>
              <Link to="/cart" className="nav-link">Cart</Link>
            </nav>
          </div>
        </header>

        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </main>

        {/* About in App so it's visible on every page */}
        <section className="about-section fade-up">
          <div className="container about-inner">
            <h2 className="about-title gold-shimmer">ABOUT ROYALIFY</h2>
            <p className="about-text">
              ROYALIFY stands as the premier destination for those who understand that true luxury transcends the material—it is an experience, an inheritance, and a manifestation of destiny. We are the curators of the rarest and most magnificent artifacts, ranging from royal circlets that whisper of fate to jewelry forged from frozen moonlight.
            </p>
            <p className="about-text">
              Every item in our collection—such as The Scepter of Silent Majesty, The Gilded Gauntlets of the Sky-Watcher, or The Grand Seal of Lumina—is meticulously chosen for its profound narrative, enduring aura, and timeless beauty. ROYALIFY is more than a store; it is the gateway to personal sovereignty. We offer symbols of power, clarity, and majesty, designed for those who are ready to reign over their own realm. Discover your artifact, and let your royal destiny be illuminated.
            </p>
          </div>
        </section>

        <footer className="site-footer glass">
          <div className="footer-inner container">
            <p>© {new Date().getFullYear()} ROYALIFY — All rights reserved</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}
