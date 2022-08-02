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
import ModalKorzina from "./modalKorzina/modalKorzina";
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
  const [Test, setTest] = useState(true);
  const [product, setProduct] = useState({});
  const [korzina, setKorzina] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [viewPort, setViewPort] = useState(getViewPort());

  const body = document.querySelector("body");
  const h2 = document.querySelector("h2");
  const MobMenuCont = document.getElementById("MobMenuCont");
  const overflowBody = mobileMenu ? "scroll" : "hidden";
  const mobileMenuOpen = document.getElementsByClassName("mobileMenuOpen");

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
  const orangeColor = () => {
    body.style.backgroundColor = "#fc6701";
    h2.style.color = "black";
    MobMenuCont.style.backgroundColor = "#fc6701";
  };
  const blackColor = () => {
    body.style.backgroundColor = "#4A4A4A";
    MobMenuCont.style.backgroundColor = "#4A4A4A";
    h2.style.color = "#fc6701";
    mobileMenuOpen.style.backgroundColor = "#4A4A4A";
  };
  const whiteColor = () => {
    body.style.backgroundColor = "white";
    h2.style.color = "#fc6701";
    MobMenuCont.style.backgroundColor = "white";
  };
  return (
  
    <>

      <>
      <Screen viewPort={viewPort}>
      
        <Header
          mobileMenu={mobileMenu}
          changeMobileMenu={changeMobileMenu}
          korzina={korzina}
          changePage={changePage}
          setTest={setTest} 
        >
          <MobileMenu
            page={page}
            mobileMenu={mobileMenu}
            changePage={changePage}
            closeMobileMenu={closeMobileMenu}
            korzina={korzina}
            contacts={contacts}
            orangeColor={orangeColor}
            blackColor={blackColor}
            whiteColor={whiteColor}
          />

        </Header>
        
      </Screen>
      
      <Catalog viewPort={viewPort} setProduct={setProduct} changePage={changePage} />
      <AboutMe />
      <Questions />
      <Reviews />
      
      </>


      {page.korzina && <Korzina korzina={korzina}/>}
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
