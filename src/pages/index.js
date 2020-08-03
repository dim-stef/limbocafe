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
      <meta name="description" content="Η Limbocafe είναι δίπλα σου σε κάθε επιχειρηματικό βήμα που κάνεις. 
      Η πλούσια συλλογή μας θα καλύψει όλες τις ανάγκες σας." />
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
