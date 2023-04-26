import React from "react";
import "./navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <img src={logo} alt="Logo" className="navbar__logo" />
      </div>
      <div className="navbar__search-container">
        <input
          type="text"
          placeholder="Search"
          className="navbar__search-input"
        />
      </div>
      <div className="navbar__title-container">
        <h1 className="navbar__title">Fleetcor UK</h1>
      </div>
      <div className="navbar__button-container">
        <button className="navbar__button">Innovation Hub</button>
      </div>
    </nav>
  );
};

export default Navbar;
