import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const [myNu, setMyNu] = useState(5);
    return (
      <>
        <div className="center_div">
       <p>{myNu}</p>
          <div className="button2" onClick = {()=>setMyNu(myNu +1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
          </div>
          <div className="button2" onClick = {()=>myNu > 0 ? setMyNu(myNu -1) : setMyNu(0)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
          </div>
        </div>
      </>
    );
  };
  
  export default UseState;
