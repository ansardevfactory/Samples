import React from "react";
import img from "./images/img.webp";
export default function Single() {
  return (
    <>
      <div className="singleouter">
        <div className="single">
          <img src={img} /> 
          <label className="rate">8,399</label>  
          <label>Sumer offer Available on iPhone 6 Plus and so more</label>
          <div className="single_innner">
            <label>SAMUDRAPUR, MAHARASHTRA</label> <label>TODAY</label>
          </div>
        </div>
      </div>
    </>
  );
}
