import React from "react";
import "./MobileMenu.css";

const MobileMenu = ({ mobileMenu }) => {
  return (
    <div
      className={
        mobileMenu ? "mobileMenuOpen" : "mobileMenuClose"
      }
    >
      
    </div>
  );
};

export default MobileMenu;
