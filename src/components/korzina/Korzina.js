import React from "react";
import './Korzina.css'
const Korzina = ({ korzina }) => {
  return (
    <div>
      <ul>
        {korzina.map((product) => (
          <li key={product.id} className="korzina_container_product">
            <p className="korzina_name_product">
                    <span>{product.brand}</span>
                    <span>{product.model}</span>
            </p>
            <p className="korzina_price_product">{product.price} ₽</p>
          <div className="korzina_container_product_img">
            <img alt="test" src={product.images[0]} className="korzina_product_img" />
          </div>
          <button className="korzina_delete_product_btn">Удалить из корзины</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Korzina;
