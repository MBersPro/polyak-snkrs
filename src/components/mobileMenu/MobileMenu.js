import React, { useState } from "react";
import "./MobileMenu.css";

const MobileMenu = ({ mobileMenu }) => {
  return (
    <div
      className={
        mobileMenu ? "mobileMenuClose mobileMenuOpen" : "mobileMenuClose"
      }
    >
      Mobile Menu
    </div>
  );
};

export default MobileMenu;
