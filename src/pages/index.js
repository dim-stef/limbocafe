// eslint-disable-next-line no-debugger
import React from "react"
import { Link, graphql } from "gatsby"
import Home from "../components/Home/Home";
import DefaultLayout from "../layouts"
import {Helmet} from "react-helmet";

const HomePage = ({ data }) => (
  <>
  <Helmet>
      <title>Limbocafe</title>
      <meta name="description" content="Limbocafe is right next to you in every business step you take. 
      Our renewed and rich portfolio, will cover all your needs." />
      <link rel="canonical" href="https://limbocafe.gr" />
  </Helmet>
  <DefaultLayout>
    <Home data={data}/>
  </DefaultLayout>
  
  </>
)

export default HomePage

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
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
