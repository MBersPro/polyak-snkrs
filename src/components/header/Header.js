import React, {useState} from "react";
import "./Header.css";
import { ReactComponent as Logo } from "./svg/logo.svg";
import { ReactComponent as Korzina } from "./svg/korzina.svg";
import Hamburger from "hamburger-react";
const Header = ({ mobileMenu, children, changeMobileMenu, setTest, changePage}) => {
const changePageToKorzina = () => {
  changePage("korzina");
}
  return (
  
    <div
      className={mobileMenu ? "mobile_header_active" : "mobile_header_passive"}
    >
      <div className="container header_container">
        <Logo className="header_logo"/>
        <Hamburger
          toggled={mobileMenu}
          toggle={changeMobileMenu}
          color="#FC6701"
          rounded
          className="hamburger"
        />
        <div className="header_menu_container">
          <ul className="header_ul">  
                <li className="header_li">
                  <a className="header_element_menu" href="#aboutMe">ОБО МНЕ</a>
                </li>
                <li className="header_li">
                  <a className="header_element_menu" href="#questions">ВОПРОСЫ</a>
                </li>
                
          </ul>
          <div className="header_container_korzinaLink">
             <a className="header_korzinaLink" onClick={changePageToKorzina}><Korzina/></a>
          </div>
          
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
