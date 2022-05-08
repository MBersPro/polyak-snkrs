import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as Logo } from "./svg/logo.svg";
import Hamburger from "hamburger-react";

const Header = ({mobileMenu, setMobileMenu}) => {
  return (
    <div className={mobileMenu ? "headerActive" : "headerPassive"}>
      <div className="container">
        <a src="#"><Logo className="logo" /></a>
        <Hamburger toggled={mobileMenu} toggle={setMobileMenu} color="#FC6701" rounded />
      </div>
    </div>
  );
};

export default Header;