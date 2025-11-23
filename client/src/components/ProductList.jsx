import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList(){
  return (
    <div className="container">
      <div style={{textAlign:'center', marginBottom: 18}}>
        <h2 style={{color:"var(--royal-gold)"}}>The Emporium</h2>
        <p style={{opacity:.85}}>Handpicked relics — limited & legendary.</p>
      </div>

      <div className="grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
