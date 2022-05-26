import React from "react";
import "./CatalogHead.css";
const CatalogHead = () => {
  return (
    <div className="catalog_head">
      <h2>КАТАЛОГ</h2>
      <ul className="catalog_filter_container">
        <li className="catalog_filter_li">
          <select>
            <option>Yeezy</option>
            <option>350</option>
            <option>450</option>
            <option>500</option>
            <option>700</option>
            <option>Slide</option>
            <option>Foam Runner</option>
          </select>
        </li>
        <li className="catalog_filter_li">
          <select>
            <option>Jordan</option>
            <option>1 Low</option>
            <option>1 Mid</option>
            <option>1 High</option>
            <option>Jordan 4</option>
          </select>
        </li>
        <li className="catalog_filter_li">
          <select className="catalogFilter_select">
            <option>Nike</option>
            <option>Dunk Low</option>
            <option>Dunk High</option>
          </select>
        </li>
        <li className="catalog_filter_li">
          <select>
            <option>Kids</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default CatalogHead;
