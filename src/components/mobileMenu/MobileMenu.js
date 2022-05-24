import React from "react";
import Contacts from "../contacts/Contacts";
import Korzina from "../korzina/Korzina";
import "./MobileMenu.css";

const MobileMenu = ({ mobileMenu, closeMobileMenu, changePage, page, korzina, orangeColor, blackColor, whiteColor}) => {
  const changeOnContacts = () => {
    changePage("contacts");
  };
  const changeOnKorzina = () => {
    changePage("korzina");
  };

  return (
    <div className={mobileMenu ? "mobileMenuOpen" : "mobileMenuClose"}>
      <div id="MobMenuCont" className="container_mobile_menu container">
        {page.main && (
          <>
            <ul className="mobileMenu_ul">
              <li className="mobileMenu_li">
                <a
                  className="mobileMenu_element_menu"
                  onClick={closeMobileMenu}
                  href="#catalog"
                >
                  КАТАЛОГ
                </a>
              </li>
              <li className="mobileMenu_li">
                <a
                  className="mobileMenu_element_menu"
                  onClick={changeOnKorzina}
                >
                  КОРЗИНА
                </a>
              </li>
              <li className="mobileMenu_li">
                <a
                  className="mobileMenu_element_menu"
                  onClick={changeOnContacts}
                >
                  КОНТАКТЫ
                </a>
              </li>

              <li className="mobileMenu_li">
                <a
                  className="mobileMenu_element_menu"
                  onClick={closeMobileMenu}
                  href="#aboutMe"
                >
                  ОБО МНЕ
                </a>
              </li>
              <li className="mobileMenu_li">
                <a
                  className="mobileMenu_element_menu"
                  onClick={closeMobileMenu}
                  href="#questions"
                >
                  ВОПРОС-ОТВЕТ
                </a>
              </li>
              <li className="mobileMenu_li">
                <a
                  className="mobileMenu_element_menu"
                  onClick={closeMobileMenu}
                  href="#review"
                >
                  ОТЗЫВЫ
                </a>
              </li>
            </ul>
            <div className="div_theme_btn_mobileMenu">
              <button className="white_theme_btn_mobileMenu" onClick={whiteColor}></button>
              <button className="orange_theme_btn_mobileMenu" onClick={orangeColor}></button>
              <button className="black_theme_btn_mobileMenu" onClick={blackColor}></button>
            </div>
          </>
        )}
        {page.contacts && <Contacts />}
        {page.korzina && <Korzina korzina={korzina}/>}
      </div>
    </div>
  );
};

export default MobileMenu;
