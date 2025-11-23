import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

export default function Home(){
  const heroImg = "/images/the-scepter-of-silent-majesty.png"; // nice artifact
  return (
    <>
      <section className="hero container">
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="hero-title gold-shimmer">Claim Your Royal Destiny</h1>
            <p className="hero-sub">
              Discover artifacts of power, crafted across realms and forgotten kingdoms.
            </p>
            <Link to="/shop" className="hero-cta">Browse Collections</Link>
          </div>

          <div className="hero-right">
            <div className="hero-artifact glass">
              <img src={heroImg} alt="artifact" />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 style={{ color: "var(--royal-gold)", marginTop: 18 }}>Featured Relics</h2>
        <div className="grid">
          {products.slice(0,4).map(p => (
            <div key={p.id} className="product-card glass gold-shimmer">
              <Link to={`/product/${p.id}`} style={{color:'inherit', display:'block'}}>
                <div style={{position:'relative'}}>
                  <img src={p.image} alt={p.name} />
                  {p.comingSoon && <div className="badge-cta badge-coming">COMING SOON</div>}
                  {p.badge && <div className="badge-promo">{p.badge}</div>}
                </div>
                <div style={{padding:'12px 6px'}}>
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-desc">{p.descShort}</p>
                  <div className="product-price">{p.priceDisplay}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
