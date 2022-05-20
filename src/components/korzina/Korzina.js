import React from "react";
import './Korzina.css'
import { ReactComponent as DelBtn } from "./svg/delBtn.svg";
const Korzina = ({ korzina }) => {
  return (
    <div>
      <ul>
        {korzina.map((product) => (
          <li key={product.id} className="korzina_container_product">
          <div className="korzina_container_product_img">
            <img alt="test" src={product.images[0]} className="korzina_product_img" />
          </div>
          <div className="container_name_and_price">
                      <span className="korzina_name_product">{product.brand}</span>
                      <span className="korzina_name_product">{product.model}</span>
            <p className="korzina_price_product">Размер: </p>
          </div>
          <button className="korzina_delete_product_btn"><DelBtn/></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Korzina;
