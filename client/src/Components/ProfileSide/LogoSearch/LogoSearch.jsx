import React from "react";
import "./LogoSearch.css";
import Logo from "../../../img/logo.png";
import { IoSearch } from "react-icons/io5";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <IoSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
