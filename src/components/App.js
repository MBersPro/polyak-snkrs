import React, { useState } from "react";
import AboutMe from "./aboutMe/AboutMe";
import Catalog from "./catalog/Catalog";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MobileMenu from "./mobileMenu/MobileMenu";
import Questions from "./questions/Questions";
import Reviews from "./reviews/Reviews";
import Screen from "./screen/Screen";

const initialPage = {
  main: true,
};

const App = () => {
  const [page, setPage] = useState({ ...initialPage });
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {page.main && (
        <>
          <Screen>
            <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          </Screen>
          <Catalog />
          <AboutMe />
          <Questions />
          <Reviews />
          <Footer />
        </>
      )}
      {page.contacts && <Contacts />}
      <MobileMenu mobileMenu={mobileMenu} />
    </>
  );
};

export default App;
