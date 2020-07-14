import React, { useEffect, useRef, useState } from "react";

function FadeImage(props) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  let style = props.style ? props.style : {};

  function onImageLoad() {
    setLoaded(true);
  }

  return (
    <img
      alt={props.alt}
      ref={ref}
      {...props}
      style={
        loaded
          ? {
              transition: "opacity 0.3s",
              opacity: 1,
              ...style,
            }
          : {
              opacity: 0,
              transition: "opacity 0.3s",
              ...style,
            }
      }
      onLoad={onImageLoad}
    />
  );
}


export default FadeImage;
