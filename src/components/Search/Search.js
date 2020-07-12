import React from "react";
import BigBackgroundImage from "../BigBackgroundImage/BigBackgroundImage";
import Search from "../Svg/Search";
import BackgroundImage from "../../images/coffeebeans2-min.jpg"
import "./Search.css";

function SearchPage() {
  return (
    <div>
      <BigBackgroundImage
        title="Shop"
        description="test"
        image={BackgroundImage}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%", position: "relative", marginTop: 80 }}>
          <input className="search-input" placeholder="Search products" />
          <div className="search-input-wrapper">
            <Search style={{ height: 50, width: 50, fill: "#808080" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
