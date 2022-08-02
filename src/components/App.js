import { doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import AboutMe from "./aboutMe/AboutMe";
import Catalog from "./catalog/Catalog";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MobileMenu from "./mobileMenu/MobileMenu";
import ProductFullInfo from "./productFullInfo/ProductFullInfo";
import Questions from "./questions/Questions";
import Reviews from "./reviews/Reviews";
import Screen from "./screen/Screen";
import Korzina from "./korzina/Korzina";
const getViewPort = () => {
  const viewPortSize = document.documentElement.clientWidth;
  if (viewPortSize <= 767) return "mobile";
  if (viewPortSize >= 768 && viewPortSize <= 1199) return "tablet";
  return "desktop";
};

const App = () => {
  const [page, setPage] = useState({ main: true });
  const [mobileMenu, setMobileMenu] = useState(false);

  const [product, setProduct] = useState({});
  const [korzina, setKorzina] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [viewPort, setViewPort] = useState(getViewPort());
  const body = document.querySelector("body");
  const overflowBody = mobileMenu ? "scroll" : "hidden";

  useEffect(() => {
    const resizeHandler = () => {
      setViewPort(getViewPort());
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const changeMobileMenu = () => {
    setMobileMenu((prev) => !prev);
    setPage({ main: true });
    body.style.overflow = `${overflowBody}`;
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    body.style.overflow = `${overflowBody}`;
  };
  const changePage = (page) => {
    setPage({ [page]: true });
  };

  const addToKorzina = () => {
    setKorzina((prev) => [...prev, product]);
  };
  return (
    <>
    {(page.main || page.mobileKorzina) && (
      <>
      
        <Screen viewPort={viewPort}>
          <Header
            mobileMenu={mobileMenu}
            changeMobileMenu={changeMobileMenu}
            korzina={korzina}
            changePage={changePage}
          >
            <MobileMenu
              page={page}
              mobileMenu={mobileMenu}
              changePage={changePage}
              closeMobileMenu={closeMobileMenu}
              korzina={korzina}
              contacts={contacts}
            />
          </Header>
          
        </Screen>

        <Catalog
          viewPort={viewPort}
          setProduct={setProduct}
          changePage={changePage}
        />
        <AboutMe />
        
        <Questions />
        <Reviews />
        <Footer />
     
      </>
    )}
      {page.desktopKorzina && (
        <Korzina korzina={korzina} changePage={changePage}/>
      )}
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
