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
  const [korzina, setKorzina] = useState([]);
  const body = document.querySelector("body")
  const h2 = document.querySelector('h2')
  const overflowBody = mobileMenu ? "scroll" : "hidden"
  const changeMobileMenu = () => {
    setMobileMenu((prev) => !prev)
    setPage({main: true})
    body.style.overflow = `${overflowBody}`
  }

  const closeMobileMenu = () => {
    setMobileMenu(false);
    body.style.overflow = `${overflowBody}`
  };

  const changePage = (page) => {
    setPage({ [page]: true });
  };

  const addToKorzina = () => {
    setKorzina((prev) => [...prev, product]);
  };
  const orangeColor = () => {
    body.style.backgroundColor = '#fc6701'
    h2.style.color = "black"
  }
  const blackColor = () => {
    body.style.backgroundColor = '#4A4A4A'
  }
  const whiteColor = () => {
    body.style.backgroundColor = 'white'
  }
  return (
    <>
      <Screen>
        <Header mobileMenu={mobileMenu} changeMobileMenu={changeMobileMenu}>
          <MobileMenu
            page={page}
            mobileMenu={mobileMenu}
            changePage={changePage}
            closeMobileMenu={closeMobileMenu}
            korzina={korzina}
            orangeColor={orangeColor}
            blackColor={blackColor}
            whiteColor={whiteColor}
          />
        </Header>
      </Screen>
      <Catalog setProduct={setProduct} changePage={changePage} />
      <AboutMe />
      <Questions />
      <Reviews />
      <Footer />
      {page.product && (
        <ProductFullInfo
          changePage={changePage}
          addToKorzina={addToKorzina}
          product={product}
        />
      )}
    </>
  );
};

export default App;
