import React from "react";
import {
    FaSearch,
    FaAngleDown,
    FaFacebook,
    FaRocketchat,
    FaRegBell,
  } from "react-icons/fa";
import play from "./images/appstore_badge.png";
import apps from "./images/playstore_badge.png";
export default function Footer() {
  return (
    <>
      <div className="r7">
        <div className="r7_col">
          <label>POPULAR LOCATIONS</label>
          <ul>
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        <div className="r7_col">
          <label>TRENDING LOCATIONS</label>
          <ul>
            <li>Bhubaneshwar</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        <div className="r7_col">
          <label>POPULAR LOCATIONS</label>
          <ul>
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        <div className="r7_col">
          <label>POPULAR LOCATIONS</label>
          <ul>
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        <div className="r7_col">
          <label>POPULAR LOCATIONS</label>
          <div className="r7_col_icons">
            <FaFacebook />
            <FaFacebook />
            <FaFacebook />
          </div>{" "}
          <div className="r7_col_img">
            <img src={play} />
            <img src={apps} />
          </div>
        </div>
      </div>
    </>
  );
}
