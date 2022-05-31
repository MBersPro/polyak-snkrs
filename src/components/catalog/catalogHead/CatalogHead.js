import React from "react";
import "./CatalogHead.css";
const CatalogHead = () => {
  return (
    
    <div className="catalog_head">
        <div className='catalogHead_bigH2_container'>
            <span className="catalog_bigH2">КАТАЛОГ</span>
            <h2 className='catalogHead_h2'>КАТАЛОГ</h2>
        </div> 
        <nav class="menu">
          <ul className="menu__list">
              <li>
                <p className="menu__link">Yeezy</p>
                
                <ul className="sub-menu__list">
                <div className="cont_sub-menu__list">
                    <li>
                      <a href="" className="sub-menu__link">750</a>
                    </li>
                    <li>
                      <a href="" className="sub-menu__link">300</a>
                    </li>
                    <li>
                      <a href="" className="sub-menu__link">250</a>
                    </li>
                    </div>
                </ul>
              </li>
          </ul>
			  </nav>

    </div>
  );
};

export default CatalogHead;
