import React, {useState, useRef, useEffect, useLayoutEffect} from "react";
import ReactDOM from "react-dom";
import { Link } from "gatsby"
import { useMediaQuery } from 'react-responsive'
import Cart from "../../icons/Cart";
import Menu from "../../icons/Menu";
import Close from "../../icons/Close";
import Logo from "../../images/logo.png"
import "./NavigationBar.css";

function NavigationBar({ children }) {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  const ref = useRef(null);
  const [isDocked, setDocked] = useState(url=='/cart'?false:true);

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  function handleScroll(e){
    if(window.scrollY > 0){
      setDocked(false);
    }else{
      if(url!='/cart'){
        setDocked(true);
      }
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);

    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
      }}
    >
      <div className="navbar-background" style={{opacity:isDocked?0:1, height:'100%'}}></div>
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
            className="logo-img"
          ></img>
          <p
            className="company-name"
          >
            Limbocafe
          </p>
        </Link>
      </div>
      {isMobile?<MobileNavigation/>:
      <div style={{ display: "flex", zIndex: 2, color:isDocked?'white !important':'black !important',alignItems:'center' }}>
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
      </div>}
      
    </div>
  );
}

function MobileNavigation(){

  const [open,setOpen] = useState(false);

  function handleClick(){
    setOpen(true);
  }

  return(
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer',zIndex:2}} 
    onClick={handleClick}>
      <Menu style={{fill:'white',height:30,margin:'0 20px'}}/>
      {open?
        ReactDOM.createPortal(<MobileMenu open={open} setOpen={setOpen}/>, document.getElementById('mobile-navigation-root')):null}
    </div>
  )
}

function MobileMenu({open, setOpen}){
  const ref = useRef();

  function onOutSideClick(e){
    if(e.target != ref.current && !ref.current.contains(e.target)){
      setOpen(false);
    }
  }

  function handleClose(e){
    e.stopPropagation();
    setOpen(false);
  }

  useEffect(()=>{
    window.addEventListener('click', onOutSideClick);
    return () =>{
      window.removeEventListener('click',onOutSideClick);
    }
  },[])
  return(
    <div style={{width:'100vw',height:'100vh',zIndex:1000000,
    position:'fixed',top:0}}>
      <div style={{width:'70%',height:'100%',backgroundColor:'white',
      zIndex:1000000,position:'absolute',right:0, display:'flex',
      flexFlow:'column',padding:'40px 20px',boxSizing:'border-box'}} ref={ref}>
        <div style={{position:'absolute',top:0,right:0,display:'flex',padding:20}} 
        onClick={handleClose}>
          <Close style={{height:25}}/>
        </div>
        <div style={{ display:'flex',
        flexFlow:'column',marginTop:40}}>
            <MobileLink to="/products">Products</MobileLink>
            <MobileLink to="/about">About</MobileLink>
            <MobileLink to="/contact">Contact</MobileLink>
            <MobileLink to="/faq">FAQ</MobileLink>
        </div>
        <Link to="/cart" style={{textDecoration:'none',color:'black',display:'flex',alignItems:'center',marginTop:20}}>
          <Cart style={{fill:'#4a4a4a'}}/>
          <p style={{marginLeft:10}}>View cart</p>
        </Link>
      </div>
      
    </div>
  )
}

function MobileLink({to,children}){
  return(
    <Link to={to} style={{textDecoration:'none',color:'black',padding:10,borderBottom:'1px solid #ececec'}}>
      {children}
    </Link>
  )
}
export default NavigationBar;
