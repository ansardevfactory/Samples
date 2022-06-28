import React from "react";
import {
  FaSearch,
  FaAngleDown,
  FaFacebook,
  FaRocketchat,
  FaRegBell,
} from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import down from "./images/download.png";
import Search from "./components/Search";
export default function Row1() {
  return (
    <>
      {" "}
      <div className="row1">
        <img src={down} />
        <Search />
        <div className="row1_searchtext">
          <div>
            <input type={"text"} />
          </div>
          <div className="row1_searchtext_icon">
            <FaSearch />
          </div>
        </div>
        <div className="row1_language">
          <label>ENGLISH</label>
          <FaAngleDown />
        </div>
        <FaRocketchat />
        <FaRegBell />
        <div className="row1_user">
          <div className="row1_circle">A</div>
          <FaAngleDown />
        </div>

        <div className="row1_button">
          <div className="row1_button_inner">
            <AiOutlinePlus />
            <label>SELL</label>
          </div>
        </div>
      </div>
    </>
  );
}
