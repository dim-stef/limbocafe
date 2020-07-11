import React, {useState} from "react";
import { Link, graphql } from "gatsby"
import Home from "../Home/Home";
import DefaultLayout from "../../layouts"
import BigBackgroundImage from "../BigBackgroundImage/BigBackgroundImage";
import BackgroundImage from "../../images/coffee-products-page.jpg"
import "./ProductsPage.css"

const ProductsPage = ({ data }) => {
  console.log(data);

  return(
    <DefaultLayout>
      <BigBackgroundImage image={BackgroundImage} title="Products"
        description="All the products avaible from Limbocafe at your service"
      />
      <div style={{display:'flex',flexFlow:'row wrap',width:'100%', 
      justifyContent:'space-evenly',margin:'10px 0',padding:20,boxSizing:'border-box',cursor:'pointer'}}>
        {data.allShopifyProduct.edges.map(edge=>{
          return (
            <Link to={`/product/${edge.node.handle}`} className="product-wrapper">
              <div style={{width:'100%'}}>
                <img src={edge.node.images[0].originalSrc} style={{width:'100%'}}/>
              </div>
              <div style={{display:'flex',flexFlow:'column',padding:10}}>
                <span>{edge.node.title}</span>
                <span style={{alignSelf:'center',marginTop:10,fontWeight:300}}>{edge.node.priceRange.minVariantPrice.amount}€</span>
              </div>
            </Link>
          )
        })}
      </div>
    </DefaultLayout>
  )
}

export default ProductsPage;

export const productListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allShopifyProduct(
      sort: { fields: [priceRange___maxVariantPrice___amount], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          shopifyId
          description
          handle
          images { 
            originalSrc
          }
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`
