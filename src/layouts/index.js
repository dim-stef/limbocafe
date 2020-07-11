import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/NavBar"
import NavigationBar from "../components/NavigationBar/NavigationBar";
import "./index.css"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <footer style={{width:'100%',display:'flex', justifyContent:'space-evenly', flexFlow:'row wrap',padding:'35px 0',
      backgroundColor:'rgb(247, 247, 247)', borderTop:'1px solid rgb(232, 232, 232)'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <img
              src={"/logo.png"}
              alt="coffee beans"
              style={{ objectFit: "cover", width: 50, height: 50, margin: 10 }}
            ></img>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                margin: 10,
                color: "#333333",
              }}
            >
            Limbocafe
          </p>
        </div>
        <div style={{display:'flex', flexFlow:'column'}}>
          <h2 style={{color:'#333333'}}>Quick links</h2>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/faq" className="footer-link">FAQ</Link>
        </div>
      </footer>
    </>
  )
}

export default DefaultLayout
