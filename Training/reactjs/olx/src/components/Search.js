import React from "react";
import {
    FaSearch,
    FaAngleDown,
    FaFacebook,
    FaRocketchat,
    FaRegBell,
  } from "react-icons/fa";
export default function Search() {
  return (
    <>
      <div className="row1_search">
        <FaSearch />
        <input type={"text"} />
        <FaAngleDown />
      </div>
    </>
  );
}
