import React from "react";
import './CatalogHead.css'
const CatalogHead = () => {
  return (
    
    <div className="catalog_head">
      <div className='catalogHead_bigH2_container'>
            <span className="catalog_bigH2">КАТАЛОГ</span>
            <h2 className='catalogHead_h2'>КАТАЛОГ</h2>
        </div> 
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
