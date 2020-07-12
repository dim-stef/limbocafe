// eslint-disable-next-line no-debugger
import React from "react"
import { Link, graphql } from "gatsby"
import Home from "../components/Home/Home";
import DefaultLayout from "../layouts"

const HomePage = ({ data }) => (
  <>
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
