import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/NavBar"
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Logo from "../images/logo.png"
import LogoSvg from "../icons/Logo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"

const DefaultLayout = ({ dockNavigation=true,children }) => {
  return (
    <>
      <ToastContainer/>
      <NavigationBar dockNavigation={dockNavigation}/>
      {children}
      <footer style={{width:'100%',display:'flex', justifyContent:'space-evenly', flexFlow:'row wrap',padding:'35px 0',
      backgroundColor:'rgb(247, 247, 247)', borderTop:'1px solid rgb(232, 232, 232)'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <LogoSvg
              style={{ objectFit: "cover", fill:'#333333', width: 60, height: 60, margin: 10, marginRight:0 }}
            ></LogoSvg>
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
