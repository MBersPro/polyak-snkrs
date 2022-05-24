import React from "react";
import './CatalogHead.css'
const CatalogHead = () => {
  return (
    <div className="catalog_head">
      <h2>КАТАЛОГ</h2>
      <ul className="catalog_filter_container">
        <li className="catalog_filter_li">Yeezy</li>
        <li className="catalog_filter_li">Jordan</li>
        <li className="catalog_filter_li">Nike</li>
        <li className="catalog_filter_li">Kids</li>
      </ul>
    </div>
  );
};

export default CatalogHead;
