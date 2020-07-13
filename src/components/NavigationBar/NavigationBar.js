import React, {
  useState, useRef, useEffect, useLayoutEffect, useContext
} from 'react';
import ReactDOM from 'react-dom';
import { useTransition, animated } from 'react-spring/web.cjs';
import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import {CartContext} from "../../contexts/CartContext";
import Feedback from '../Feedback/Feedback';
import Cart from '../../icons/Cart';
import Menu from '../../icons/Menu';
import LogoSvg from '../../icons/Logo';
import Close from '../../icons/Close';
import Logo from '../../images/logo.png';
import './NavigationBar.css';

function NavigationBar({ dockNavigation=true,children }) {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  const ref = useRef(null);
  const cartContext = useContext(CartContext);
  const cartSize = cartContext.cart.checkout.lineItems.length;
  const [feedbackOpen, setOpen] = useState(false);
  const [isDocked, setDocked] = useState(dockNavigation==false?dockNavigation : true);

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  function handleScroll(e) {
    if (window.scrollY > 0) {
      setDocked(false);
    } else if (url != '/cart') {
      setDocked(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Feedback open={feedbackOpen} setOpen={setOpen} />
      <div
        ref={ref}
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          display: 'flex',
        }}
      >
        <div className="navbar-background" style={{ opacity: isDocked ? 0 : 1, height: '100%' }} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            zIndex: 2,
          }}
        >
          <Link
            to="/"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            {/* <img
            src={Logo}
            alt="coffee beans"
            className="logo-img"
          ></img> */}
            <LogoSvg className="logo-img" style={{ marginRight: 0, fill: 'white' }} />
            <p
              className="company-name"
            >
              Limbocafe
            </p>
          </Link>
        </div>
        {isMobile ? <MobileNavigation setFeedbackOpen={setOpen}/>
          : (
            <div style={{
              display: 'flex', zIndex: 2, color: isDocked ? 'white !important' : 'black !important', alignItems: 'center',
            }}
            >
              <div className="navlink-wrapper" id="feedback-button">
                <span
                  className="navigation-item navlink"
                  onClick={() => setOpen(true)}
                >
                  Rate us
                </span>
              </div>
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
                <Link className="navigation-item navlink" to="/cart">
                  <div style={{position:'relative'}}>
                    <Cart style={{ fill: 'white' }} />
                    <div className="cart-size-box">
                      <span style={{color:'white',fontSize:'0.7rem'}}>{cartSize}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}

      </div>
    </>
  );
}

function MobileNavigation({setFeedbackOpen}) {
  const drawerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const transitions = useTransition(open, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0)' },
    leave: { transform: 'translateX(100%)' },
    config: { duration: 200 },
  });

  function handleClick() {
    setOpen(true);
  }

  const root = typeof document !== 'undefined' ? document.getElementById('mobile-navigation-root') : null;
  return (
    <div
      style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 2,
      }}
      onClick={handleClick}
    >
      <Menu style={{ fill: 'white', height: 30, margin: '0 20px' }} />
      {root && ReactDOM.createPortal(
        transitions((style, item, t, i) => item && (
          <div style={{
            width: '100vw',
            height: '100vh',
            zIndex: 1000000,
            position: 'fixed',
            top: 0,
          }}
          >
            <animated.div
              className="mobile-drawer"
              style={style}
              key={i}
              ref={drawerRef}
            >

              <MobileMenu open={open} setOpen={setOpen} drawerRef={drawerRef} setFeedbackOpen={setFeedbackOpen}/>
            </animated.div>
          </div>
        )),
        document.getElementById('mobile-navigation-root'),
      )}
    </div>
  );
}

function MobileMenu({ open, setOpen, drawerRef, setFeedbackOpen }) {
  const feedbackElement = typeof document !== 'undefined' ? document.getElementById('modal-root') : null;
  const cartContext = useContext(CartContext);
  const cartSize = cartContext.cart.checkout.lineItems.length;

  function onOutSideClick(e) {
    if (e.target != drawerRef.current && !drawerRef.current.contains(e.target)
    && feedbackElement && feedbackElement.childElementCount == 0) {
      setOpen(false);
    }
  }

  function handleClose(e) {
    e.stopPropagation();
    setOpen(false);
  }

  useEffect(() => {
    window.addEventListener('click', onOutSideClick);
    return () => {
      window.removeEventListener('click', onOutSideClick);
    };
  }, []);
  return (
    <>
      <div
        style={{
          position: 'absolute', top: 0, right: 0, display: 'flex', padding: 20,
        }}
        onClick={handleClose}
      >
        <Close style={{ height: 25 }} />
      </div>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        marginTop: 40,
      }}
      >
        <MobileLink to="/products">Products</MobileLink>
        <MobileLink to="/about">About</MobileLink>
        <MobileLink to="/contact">Contact</MobileLink>
        <MobileLink to="/faq">FAQ</MobileLink>
        <span id="feedback-button" style={{
          textDecoration: 'none', color: 'black', padding: 10, borderBottom: '1px solid #ececec',
        }} onClick={()=>setFeedbackOpen(true)}>Rate us</span>
      </div>
      <Link
        to="/cart"
        style={{
          textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center', marginTop: 20,
        }}
      >
        <Cart style={{ fill: '#4a4a4a' }} />
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:20,width:20,borderRadius:'100%',
        backgroundColor:'rgb(3, 169, 244)'}}>
          <span style={{color:'white',fontSize:'0.7rem'}}>{cartSize}</span>
        </div>
        <p style={{ marginLeft: 10 }}>View cart</p>
      </Link>
    </>
  );
}

function MobileLink({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: 'none', color: 'black', padding: 10, borderBottom: '1px solid #ececec',
      }}
    >
      {children}
    </Link>
  );
}
export default NavigationBar;
