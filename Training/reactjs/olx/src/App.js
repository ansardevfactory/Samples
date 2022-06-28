import React, { useState } from "react";
import {
  FaSearch,
  FaAngleDown,
  FaFacebook,
  FaRocketchat,
  FaRegBell,
} from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import down from "./images/download.png";
import "./style.css";
import bg from "./images/bg.png";
import Single from "./Single";
import two from "./images/2.png";
import Row1 from "./Row1";
import Footer from "./Footer";
export default function App() {
  const [array, setArray] = useState([
    "Cars",
    "Motorcycles",
    "Mobile Phones",
    "For Sale: Houses & Apartments",
    "Scooters",
    "Commercial & Other Vehicles",
    "For Rent: Houses & Apartments",
  ]);
  return (
    <>
     <Row1 />

      <div className="r2">
        <div className="r2_cat">
          <label>ALL CATEGORIES</label>
          <FaAngleDown />
        </div>
        <ul>
          {array.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <div className="r3">
        <img src={bg} />
      </div>
      <div className="r4">
        <label>Fresh recommendations</label>
      </div>
      <div className="r5outer">
        <div className="r5">
          <Single /> <Single /> <Single /> <Single /> <Single /> <Single />{" "}
          <Single /> <Single /> <Single /> <Single /> <Single /> <Single />{" "}
          <Single /> <Single /> <Single /> <Single /> <Single /> <Single />{" "}
          <Single /> <Single /> <Single /> <Single /> <Single /> <Single />{" "}
          <Single /> <Single /> <Single /> <Single /> <Single /> <Single />{" "}
          <Single /> <Single />
        </div>
      </div>
      <div className="loadmore">
        <button>LOAD MORE...</button>
      </div>
      <label className="newb">OFFER...</label>
      <div className="r6">
        <img src={two} />
      </div>
      <Footer />
    </>
  );
}
