import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logoImg"
            src="https://i.ibb.co/Zc4mDzG/5ec2f037975ed372da9f6286-Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__links">
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panels</Link>
      </div>
      <div className="header__right">
        <Link to="/" className={isMenuOpen && "header__link--hidden"}>
          Shop
        </Link>
        <Link to="/login" className={isMenuOpen && "header__link--hidden"}>
          Tesla Account
        </Link>
        <div
          className="header__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Close /> : <Link to="/" >Menu</Link>}
        </div>
      </div>
    </div>
  );
}

export default Header;
