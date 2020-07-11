import React, { useState, useEffect } from "react";
import "./Home.css";
import BestProductCard from "../BestProductCard/BestProductCard";
import BigBackgroundImage from "../BigBackgroundImage/BigBackgroundImage";
import BackgroundImage from "../../images/coffee-beans.jpg"

function Home({data}) {
  const [meta, setMeta] = useState({});
  const [products, setProducts] = useState([]);

  console.log(data);
  async function getMeta() {
    try {
      let response = await fetch(process.env.REACT_APP_API_URL + "/front-page");
      let data = await response.json();
      setMeta(data);
    } catch (e) {}
  }

  async function getProducts() {
    try {
      let response = await fetch(process.env.REACT_APP_API_URL + "/products");
      let data = await response.json();
      setProducts(data);
    } catch (e) {}
  }

  useEffect(() => {
    //getMeta();
    //getProducts();
  }, []);

  return (
    <div className="home">
      <BigBackgroundImage
        title="Quality coffee"
        description="Limbocafe is right next to you in every business step you take. Our renewed and rich portfolio, will cover all your needs."
        image={BackgroundImage}
      />

      <div
        style={{
          zIndex: 2,
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          marginTop: -30,
        }}
      >
        {data.allShopifyProduct.edges.length > 0 ? (
          <>
            <BestProductCard product={data.allShopifyProduct.edges[0].node} />
            <BestProductCard product={data.allShopifyProduct.edges[1].node} />
            <BestProductCard product={data.allShopifyProduct.edges[2].node} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
//allShopifyProduct.edges[0].node