import React, { useState,useEffect } from "react";
import "./style.css";

const USeEffect = () => {
  const [myNu, setMyNu] = useState(0);

  useEffect(() => {
    document.title = `Chats(${myNu})`;
  });

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
          
        </div>
      </>
    );
  };
  
  export default USeEffect;
