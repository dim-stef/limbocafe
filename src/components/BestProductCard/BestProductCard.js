import React, { useState } from "react";
import { navigate } from '@reach/router';

import "./BestProductCard.css";

function BestProductCard({ product }) {
  const [showBuy, setShowBuy] = useState(false);
  
  function handleClick() {
    //history.push(`/products/${product.slug}`);
    navigate(`/product/${product.handle}`)
  }

  return (
    <div
      className="best-product-card"
      onClick={handleClick}
      onMouseOver={() => setShowBuy(true)}
      onMouseLeave={() => setShowBuy(false)}
    >
      {showBuy?
      <div style={{position:'absolute',top:0,right:0,height:'100%',zIndex:100,
      width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{padding:'0 20px',borderRadius:100,backgroundColor:'#ffffff91'}}>
          <p>View item</p>
        </div>
      </div>:
      null}
      <div
        className="product-inner-wrapper"
        style={{
          filter: showBuy ? "blur(5px)" : null,
          transform: showBuy ? "scale(1.2)" : null,
        }}
      >
        <img
          alt="product"
          src={
            
            product.images[0].originalSrc
          }
          style={{ width: "100%", objectFit: "contain" }}
        />
        <p
          style={{
            fontSize: "1rem",
            margin: 0,
            padding: 10,
            textAlign: "center",
          }}
        >
          {product.title}
        </p>
        <p className="main-font" style={{ margin: 10, fontWeight: 300 }}>
          {product.priceRange.minVariantPrice.amount}$
        </p>
      </div>
    </div>
  );
}

export default BestProductCard;
