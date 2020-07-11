/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import BigBackgroundImage from "../BigBackgroundImage/BigBackgroundImage";
import FadeImage from "../FadeImage/FadeImage";
import DefaultLayout from "../../layouts/index";
import { useAddItemToCart } from "../../contexts/CartContext";
import BackgroundImage from "../../images/coffee-product-page.jpg"
import "./Product.css";

function Product({pageContext}) {
  const product = pageContext.product;
  const [imageHeight, setImageHeight] = useState(0);
  const ref = useRef(null);
  const addItemToCart = useAddItemToCart()

  function handleAddToCart(variant) {
    addItemToCart(variant.variants[0].shopifyId, 1)
  }

  useEffect(()=>{

  },[ref])

  function createMarkup(html) {
    return {__html: html};
  }
  console.log(product.variants[0])
  return (
    <DefaultLayout>
      <div>
        <BigBackgroundImage
          image={BackgroundImage}
          title={product.title}
        />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="card-wrapper">
              <div className="responsive-image-wrapper">
                <FadeImage
                  alt="product"
                  className="product-main-image"
                  src={product.images[0].originalSrc}
                />
              </div>
              <div className="product-details">
                <p className="product-description" dangerouslySetInnerHTML={createMarkup(product.descriptionHtml)}></p>
                <p
                  className="product-description"
                  style={{ fontWeight: 400, fontSize: "1.6rem" }}
                >
                  {product.priceRange.minVariantPrice.amount}$
                </p>
                <button onClick={()=>{handleAddToCart(product)}}>Add to cart</button>
              </div>
            </div>
          </div>
        
      </div>
    </DefaultLayout>
  );
}

export default Product;
