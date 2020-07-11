import React, { useContext } from "react"
import DefaultLayout from "../layouts"
import { CartContext, useGoToCheckout } from "../contexts/CartContext"
import "./cart.css"

const Cart = () => {
  const {
    cart: {
      checkout: { lineItems },
    },
  } = useContext(CartContext)

  let formatter = new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR',
  });

  const goToCheckout = useGoToCheckout()
  return (
    <DefaultLayout>
      <h1>Cart</h1>
      <div>The cart length is {lineItems.length}</div>
      <button onClick={goToCheckout}>Go To Checkout</button>
      <ul
        className="cart-container"
      >
        <div style={{display:'flex',width:'100%',marginBottom:30,borderBottom:'1px solid #e8e8e8'}}>
          <p style={{flexBasis:'20%',display:'flex',justifyContent:'center'}}>Product</p>
          <p style={{flexBasis:'40%'}}></p>
          <p style={{flexGrow:1,display:'flex',justifyContent:'center'}}>Price</p>
        </div>
        {lineItems.map((item,i) => (
          <li
            style={{
              width:'100%',
              listStyleType: "none",
              textAlign: "center",
              display:'flex',
              flexFlow:'row',
              margin:'10px 0'
            }}
          >
            <figure style={{flexBasis:'20%',margin:0}}>
              <img
                src={item.variant.image.src}
                className="cart-product-image"
              />
            </figure>
            <div className="cart-product-wrapper">
              <p className="cart-product-name">{item.title}</p>
              <p style={{fontWeight:300}}>Quantity: {item.quantity}</p>
            </div>
            <div style={{flexGrow:1, display:'flex',flexFlow:'column',alignItems:'center'}}>
              <p style={{fontWeight:300}}>{formatter.format(item.variant.price*item.quantity)}</p>
              <p style={{fontWeight:300, fontSize:'0.8rem',color:'#4e4e4e'}}>
              ({item.quantity} x {formatter.format(item.variant.price)})</p>
            </div>
            
          </li>
        ))}
      </ul>
    </DefaultLayout>
  )
}

export default Cart
