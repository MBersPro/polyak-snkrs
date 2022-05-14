import React from "react";
import "./Catalog.css";

const Catalog = () => {
  return (
    <div className="container catalog_container" id="catalog">
      <div className="catalog_head">
        <ul className="catalog_filter_container">
          <li>
            <h2>КАТАЛОГ</h2>
          </li>
          <li className="catalog_filter_li">Yeezy</li>
          <li className="catalog_filter_li">Jordan</li>
          <li className="catalog_filter_li">Nike</li>
          <li className="catalog_filter_li">Kids</li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
