import React, { useState } from "react";
import AboutMe from "./aboutMe/AboutMe";
import Catalog from "./catalog/Catalog";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MobileMenu from "./mobileMenu/MobileMenu";
import Questions from "./questions/Questions";
import Reviews from "./reviews/Reviews";
import Screen from "./screen/Screen";



const App = () => {
  const [page, setPage] = useState({ main: true });
  const [mobileMenu, setMobileMenu] = useState(false);

  const changeMobileMenu = () => {
    setMobileMenu((prev) => !prev)
    setPage({main: true})
  }

  const closeMobileMenu = () => {
    setMobileMenu(false)
  }
  const changePage = (page) => {
    setPage({[page]: true});
  };
  console.log(mobileMenu);
  return (
        <>
          <Screen>
            <Header
              mobileMenu={mobileMenu}
              changeMobileMenu={changeMobileMenu}
            >
              <MobileMenu page={page} mobileMenu={mobileMenu} changePage={changePage} closeMobileMenu={closeMobileMenu} />
            </Header>
          </Screen>
          <Catalog />
          <AboutMe />
          <Questions />
          <Reviews />
          <Footer />
        </>
  );
};

export default App;
