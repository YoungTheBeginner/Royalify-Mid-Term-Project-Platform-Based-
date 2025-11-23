import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }){
  const { addItem } = useContext(CartContext);

  return (
    <div className="product-card glass">
      <Link to={`/product/${product.id}`} style={{color:'inherit', display:'block'}}>
        <div style={{position:'relative'}}>
          <img src={product.image} alt={product.name} />
          {product.comingSoon && <div className="badge-cta badge-coming">COMING SOON</div>}
          {product.badge && <div className="badge-promo">{product.badge}</div>}
        </div>
      </Link>

      <div style={{padding:'10px 6px'}}>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.descShort}</p>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
          <div className="product-price">{product.priceDisplay}</div>
          {!product.comingSoon && <button className="cta" onClick={() => addItem(product, 1)}>Add</button>}
        </div>
      </div>
    </div>
  );
}
