import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        
        <h1 className="company">Saucy Spirals</h1>
      </div>
      <div className="form">
        <input className="search-bar" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
