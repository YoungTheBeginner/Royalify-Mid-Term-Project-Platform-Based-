import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import products from '../data/products';

export default function CartPage(){
  const { items, removeItem, updateQty, total, clear } = useContext(CartContext);
  const navigate = useNavigate();

  if (items.length === 0) return (
    <div className="container" style={{padding:40}}>
      <h2>Your cart is empty</h2>
      <Link to="/shop" className="hero-cta">Browse Collections</Link>
    </div>
  );

  return (
    <div className="container" style={{padding:20}}>
      <h2 style={{color:"var(--royal-gold)"}}>Your Cart</h2>
      <div style={{marginTop:20}}>
        {items.map(it => (
          <div key={it.id} style={{display:'flex',gap:18,alignItems:'center',padding:12,background:'rgba(255,255,255,0.02)',borderRadius:12,marginBottom:12}}>
            <img src={it.image} alt={it.name} style={{width:96,height:96,objectFit:'contain'}}/>
            <div style={{flex:1}}>
              <div style={{fontWeight:700}}>{it.name}</div>
              <div style={{opacity:0.8}}>{it.priceDisplay}</div>
            </div>

            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <input type="number" min="1" value={it.qty} onChange={e => updateQty(it.id, Math.max(1, Number(e.target.value)))} style={{width:64,padding:6}}/>
              <button className="cta" onClick={() => removeItem(it.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:20, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontSize:18}}>Total: <strong style={{color:'var(--royal-gold)'}}>${(total/100).toFixed(2)}</strong></div>
        <div style={{display:'flex',gap:12}}>
          <button className="cta" onClick={() => { clear(); }}>Clear</button>
          <button className="cta" onClick={() => navigate('/checkout')}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
