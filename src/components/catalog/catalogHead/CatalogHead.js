import React from "react";
import "./CatalogHead.css";
const CatalogHead = () => {
  return (
    
    <div className="catalog_head">
      <div className='catalogHead_bigH2_container'>
            <span className="catalog_bigH2">КАТАЛОГ</span>
            <h2 className='catalogHead_h2'>КАТАЛОГ</h2>
        </div> 
      <ul className="catalog_filter_container">
        <li className="catalog_filter_li">
          <select className="CatalogHead_select" >
            <option className="CatalogHead_option">Yeezy</option>
            <option className="CatalogHead_option">350</option>
            <option className="CatalogHead_option">450</option>
            <option className="CatalogHead_option">500</option>
            <option className="CatalogHead_option">700</option>
            <option className="CatalogHead_option">Slide</option>
            <option className="CatalogHead_option">Foam Runner</option>
          </select>
        </li>
        <li className="catalog_filter_li">
          <select className="CatalogHead_select">
            <option>Jordan</option>
            <option>1 Low</option>
            <option>1 Mid</option>
            <option>1 High</option>
            <option>Jordan 4</option>
          </select>
        </li>
        <li className="catalog_filter_li">
          <select className="CatalogHead_select">
            <option>Nike</option>
            <option>Dunk Low</option>
            <option>Dunk High</option>
          </select>
        </li>
        <li className="catalog_filter_li">
          <select className="CatalogHead_select">
            <option>Kids</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default CatalogHead;
