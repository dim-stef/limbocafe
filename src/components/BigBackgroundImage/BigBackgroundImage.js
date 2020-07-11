import React from "react";
import FadeImage from "../FadeImage/FadeImage";
import "./BigBackgroundImage.css";

function BigBackgroundImage({ title, description, image }) {
  return (
    <div
      style={{
        width: "100%",
        height: "60vh",
        position: "relative",
        display: "flex",
      }}
    >
      <div className="description-font main-headers-wrapper">
        <h1 className="main-font main-header">{title}</h1>
        <p className="main-font secondary-header">{description}</p>
      </div>
      <FadeImage
        src={image}
        alt="coffee beans"
        style={{
          objectFit: "cover",
          width: "100%",
          maxHeight: "100%",
          filter: "brightness(0.7) saturate(0.8)",
        }}
      ></FadeImage>
    </div>
  );
}

export default BigBackgroundImage;
