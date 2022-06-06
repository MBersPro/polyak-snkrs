import React from "react";
import "./Korzina.css";
import { ReactComponent as DelBtn } from "./svg/delBtn.svg";
const Korzina = ({ korzina }) => {

   const amountOfProducts = () => korzina.reduce(
     (previousValue, currentValue) => previousValue.price + currentValue.price
   );

  return (
    <div>
      <ul className="korzina_container_products">
        {korzina.map((product) => (
          <li key={product.id} className="korzina_container_product">
            <div className="korzina_container_product_img">
              <img
                alt="test"
                src={product.images[0]}
                className="korzina_product_img"
              />
            </div>
            <div className="container_name_and_size">
              <span className="korzina_name_product">{product.brand}</span>
              <span className="korzina_name_product">{product.model}</span>
              <p className="korzina_size_product">Размер: </p>
            </div>
            <button className="korzina_delete_product_btn">
              <DelBtn />
            </button>
            {product.price}
          </li>
        ))}
        
      </ul>
      <div className="korzina_orderingContainer">
        <p className="korzina_orderingTitle">
            Оформление заказа
        </p>
        <p>
        {`Сумма вашего заказа: ${amountOfProducts()}`}
        </p>
        <form className="korzina_orderingForm">
          <input className="korzina_orderingFormInput"/>
          <input className="korzina_orderingFormInput"/>
          <input className="korzina_orderingFormInput"/>
          <input className="korzina_orderingFormInput"/>
        </form>
        <button className="korzina_confirmOrderBtn">Подтвердить заказ</button>
      </div>
       <div></div>
      {korzina.length === 0 && <p>В вашей корзине пока пусто</p>}
    </div>
  );
};

export default Korzina;
