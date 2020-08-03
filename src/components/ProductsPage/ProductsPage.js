import React, {useState} from "react";
import { Link, graphql } from "gatsby";
import {navigate} from "@reach/router";
import {Helmet} from "react-helmet";
import ReactPaginate from 'react-paginate';
import Home from "../Home/Home";
import DefaultLayout from "../../layouts"
import BigBackgroundImage from "../BigBackgroundImage/BigBackgroundImage";
import BackgroundImage from "../../images/coffee-products-page-min.jpg"
import "./ProductsPage.css"

const ProductsPage = ({ data,pageContext }) => {

  //All the products avaible from Limbocafe at your service
  return(
    <DefaultLayout>
      <Helmet>
        <title>Limbocafe - Προιόντα</title>
        <meta name="description" content={`Limbocafe products page ${pageContext.currentPage}`} />
        <link rel="canonical" href={`https://limbocafe.gr/products/${pageContext.currentPage}`} />
      </Helmet>

      <BigBackgroundImage image={BackgroundImage} title="Products"
        description="Όλα τα προιόντα της Limbocafe στη διάθεσή σας"
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
      <PageNumbers pageContext={pageContext}/>
    </DefaultLayout>
  )
}

function PageNumbers({pageContext}){

  let maxVisiblePageCount = 10;

  function handleNavigateTo(page){
    if(page.selected == 0){
      navigate(`/products`)
    }else {
      navigate(`/products/${page.selected + 1}`)
    }
    
  }

  return(
    <div className="page-numbers-wrapper">
      <ReactPaginate
          forcePage={pageContext.currentPage - 1}
          pageClassName={'pageItem'}
          previousLabel={'προηγούμενο'}
          nextLabel={'επόμενο'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageContext.numPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handleNavigateTo}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'activeClassName'}
          previousClassName={'previous-next-buttons'}
          nextClassName={'previous-next-buttons'}
        />
    </div>
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
