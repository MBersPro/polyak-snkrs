import React, { useState } from "react";
import AboutMe from "./aboutMe/AboutMe";
import Catalog from "./catalog/Catalog";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MobileMenu from "./mobileMenu/MobileMenu";
import ProductFullInfo from "./productFullInfo/ProductFullInfo";
import Questions from "./questions/Questions";
import Reviews from "./reviews/Reviews";
import Screen from "./screen/Screen";

const App = () => {
  const [page, setPage] = useState({ main: true });
  const [mobileMenu, setMobileMenu] = useState(false);
  const [product, setProduct] = useState({});

  const changeMobileMenu = () => {
    setMobileMenu((prev) => !prev);
    setPage({ main: true });
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  const changePage = (page) => {
    setPage({ [page]: true });
  };
  return (
    <>
      <Screen>
        <Header mobileMenu={mobileMenu} changeMobileMenu={changeMobileMenu}>
          <MobileMenu
            page={page}
            mobileMenu={mobileMenu}
            changePage={changePage}
            closeMobileMenu={closeMobileMenu}
          />
        </Header>
      </Screen>
      <Catalog setProduct={setProduct} changePage={changePage} />
      <AboutMe />
      <Questions />
      <Reviews />
      <Footer />
      {page.product && <ProductFullInfo product={product} />}
    </>
  );
};

export default App;
