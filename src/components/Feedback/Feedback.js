import React, {useEffect, useRef, useState} from "react";
import {useTransition, animated} from "react-spring/web.cjs";
import ReactDOM from "react-dom";
import Star from "../../icons/Star";
import "./Feedback.css";

function Feedback({open,setOpen}){
  const ref = useRef(null);
  const [stars,setStars] = useState(-1);
  const [body,setBody] = useState("");
  const transitions = useTransition(open, {
    from: { opacity: 0, transform: 'scale(0.9) translateY(-40px)' },
    enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
    leave: { opacity: 0, transform: 'scale(0.9) translateY(20px)' },
    config: {duration:200}
  })

  function onOutSideClick(e){
    if(ref.current && e.target != ref.current && !ref.current.contains(e.target)
      && !document.getElementById('feedback-button').contains(e.target)){
      console.log(e.target);
      setOpen(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('click', onOutSideClick);
    return () =>{
      window.removeEventListener('click',onOutSideClick);
    }
  },[])

  function handleStarClick(count){
    setStars(count)
  }

  function handleSubmit(){
    let actualStars = 0;
    if(stars >= 0 && stars <=4){
      actualStars = stars + 1
    }
    // do strapi
  }
  useEffect(()=>{
    console.log(body)
  },[body])
  return ReactDOM.createPortal(
      transitions((style, item, t, i) =>
        item && (
        <div style={{position:'fixed',top:0,right:0,width:'100vw',height:'100%',display:'flex',justifyContent:'center',
        alignItems:'center',zIndex:123123123123}}>
            <animated.div key={i} style={style} ref={ref} className="feedback-container">
              <h1 style={{margin:'0px 20px 20px 20px',fontSize:'1.7rem'}}>Rate us!</h1>
              <div style={{display:'flex',flexFlow:'row',justifyContent:'space-evenly'}}>
                {[...Array(5)].map((item,i)=>{
                  return <Star style={{width:'10%',fill:stars<i?'#dedede':'yellow'}} key={i} onClick={()=>handleStarClick(i)}/>
                })}
              </div>
              <textarea placeholder="How was your experience using limbocafe?" onChange={(e)=>setBody(e.target.value)}
              style={{margin:20,flexGrow:1,fontSize:'1rem',padding:20,borderRadius:10}}></textarea>
              <button className="feedback-submit-button">Submit</button>
            </animated.div>
          </div>
        )
      )
      ,document.getElementById('modal-root')
    )
}

export default Feedback;