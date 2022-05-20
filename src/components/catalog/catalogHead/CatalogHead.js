import React from "react";
import './CatalogHead.css'
const CatalogHead = () => {
  return (
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
  );
};

export default CatalogHead;
