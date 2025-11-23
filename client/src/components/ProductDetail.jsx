import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

export default function ProductDetail(){
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const { addItem } = useContext(CartContext);

  if (!product) return <div className="container"><p>Not found</p></div>;

  return (
    <div className="container detail">
      <Link to="/shop" className="back">← Back to collection</Link>

      <div className="detail-grid">
        <div className="detail-image glass">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <h2>{product.name}</h2>
          {product.comingSoon && <span className="badge-cta badge-coming">COMING SOON</span>}
          {product.badge && <span className="badge-cta badge-promo" style={{right:12,left:'auto',position:'relative'}}> {product.badge}</span>}
          <p style={{marginTop:14, lineHeight:1.6}}>{product.descLong}</p>

          <div style={{marginTop:20}}>
            <div className="price-large">{product.priceDisplay}</div>
            {!product.comingSoon ? (
              <>
                <button className="cta" onClick={() => { addItem(product,1); navigate('/cart'); }}>Buy Now</button>
              </>
            ) : (
              <button className="cta muted" disabled>Coming Soon</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
