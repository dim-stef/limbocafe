import React from "react";
import { Link } from "gatsby"
import Cart from "../../icons/Cart";
import Logo from "../../images/logo.png"
import "./NavigationBar.css";

function NavigationBar({ children }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
      }}
    >
      <div className="navbar-background"></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          zIndex: 2,
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={Logo}
            alt="coffee beans"
            style={{ objectFit: "cover", width: 50, height: 50, margin: 10 }}
          ></img>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              margin: 10,
              color: "#e6e6e6",
            }}
          >
            Limbocafe
          </p>
        </Link>
      </div>
      <div style={{ display: "flex", zIndex: 2 }}>
        <div className="navlink-wrapper">
          <Link className="navigation-item navlink" to="/products">Products</Link>
        </div>
        <div className="navlink-wrapper">
          <Link className="navigation-item navlink" to="/about">About</Link>
        </div>
        <div className="navlink-wrapper">
          <Link className="navigation-item navlink" to="/contact">Contact</Link>
        </div>
        <div className="navlink-wrapper">
          <Link className="navigation-item navlink" to="/cart"><Cart style={{fill:'white'}}/></Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
