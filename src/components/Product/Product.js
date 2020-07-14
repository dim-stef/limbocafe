/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { navigate } from '@reach/router';
import BigBackgroundImage from "../BigBackgroundImage/BigBackgroundImage";
import FadeImage from "../FadeImage/FadeImage";
import DefaultLayout from "../../layouts/index";
import { useAddItemToCart } from "../../contexts/CartContext";
import BackgroundImage from "../../images/coffee-product-page-min.jpg"
import { toast } from 'react-toastify';
import {Helmet} from "react-helmet";
import "./Product.css";

function AddNotification({product}){

  function handleClick(){
    navigate('/cart')
  }
  
  return(
    <div style={{color:'#3a3a3a'}}>
      <p style={{borderBottom:'1px solid #e8e8e8', fontWeight:300}}>JUST ADDED TO CART</p>
      <div style={{display:'flex',flexFlow:'row wrap'}}>
        <div style={{flexBasis:'30%'}}>
          <FadeImage
            alt="product"
            style={{width:'100%'}}
            src={product.images[0].originalSrc}
          />
        </div>
        <p style={{flexBasis:'50%', margin:'0 10px'}}>{product.title}</p>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <button className="view-cart-button" onClick={handleClick}>View cart</button>
      </div>
      
    </div>
    
  )
}

function Product({pageContext}) {
  const product = pageContext.product;
  const [imageHeight, setImageHeight] = useState(0);
  const ref = useRef(null);
  const addItemToCart = useAddItemToCart()

  function handleAddToCart(variant) {
    toast(
      <AddNotification product={variant}/>, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    addItemToCart(variant.variants[0].shopifyId, 1)
  }

  function createMarkup(html) {
    return {__html: html};
  }
  return (
    <DefaultLayout>
      <Helmet>
        <title>Limbocafe - {product.title}</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://limbocafe.gr/product/${product.handle}`} />
      </Helmet>
      <div>
        <BigBackgroundImage
          image={BackgroundImage}
          title={product.title}
        />
        
          <div style={{ display: "flex", justifyContent: "center", width:'100%' }}>
            <div className="product-cards-wrapper">
              <div className="card-wrapper" style={{maxHeight:660}}>
                  <FadeImage
                    alt="product"
                    className="product-main-image"
                    src={product.images[0].originalSrc}
                  />
                </div>
              <div className="card-wrapper description-wrapper">
                
                <div className="product-details">
                  <p className="product-description" dangerouslySetInnerHTML={createMarkup(product.descriptionHtml)}></p>
                  <p
                    className="product-description"
                    style={{ fontWeight: 400, fontSize: "1.6rem" }}
                  >
                    {product.priceRange.minVariantPrice.amount}$
                  </p>
                  <button className="add-to-cart-button" 
                  onClick={()=>{handleAddToCart(product)}}>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </DefaultLayout>
  );
}

export default Product;
