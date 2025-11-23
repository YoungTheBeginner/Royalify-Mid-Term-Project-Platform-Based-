import React from 'react';
import { Link } from 'react-router-dom';

export default function ThankYou(){
  const order = JSON.parse(localStorage.getItem('lastOrder') || '{}');
  return (
    <div className="container" style={{padding:40}}>
      <h2 style={{color:"var(--royal-gold)"}}>Thank you for your order</h2>
      <p style={{marginTop:10}}>Order ID: {order.id || '—'}</p>
      <p style={{marginTop:10}}>We sent a confirmation to: {order.customer?.email || '—'}</p>
      <Link to="/shop" className="hero-cta" style={{marginTop:18, display:'inline-block'}}>Continue Shopping</Link>
    </div>
  );
}
