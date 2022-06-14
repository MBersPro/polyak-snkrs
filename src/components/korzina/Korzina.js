import React from "react";
import "./Korzina.css";
import { ReactComponent as DelBtn } from "./svg/delBtn.svg";
import { ReactComponent as NameSvg } from "./svg/Name.svg";
import { ReactComponent as PhoneSvg } from "./svg/Phone.svg";
const Korzina = ({ korzina }) => {
  console.log(korzina);

  const amountOfProducts = () =>
    korzina.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price
    , 0);

  if (korzina.length === 0) return (
    <div className="">
      <p>В вашей корзине пока пусто</p>
    </div>
  );
  return (
    <div className="korzina_container">
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
            <div>
              <div className="korzina_container_txt">
                <p className="korzina_price_product">{product.price}₽</p>
                <span className="korzina_name_product">
                  {product.brand}
                  {product.model}
                </span>
                <p className="korzina_size_product">Размер: </p>
              </div>

              <button className="korzina_delete_product_btn">
                <DelBtn className="korzina_delBtn" />
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="korzina_orderTotal">{`Итого: ${amountOfProducts()}`}</p>
      <div className="korzina_orderingContainer">
        <p className="korzina_orderingTitle">Оформление заказа</p>

        <form className="korzina_orderingForm">
          <span className="korzina_orderingFormElement">
            <p className="korzina_orderingFormInputName">Имя</p>
            <div className="korzina_orderingFormInputContainer">
              <input className="korzina_orderingFormInput" type="text" />
            </div>
            <NameSvg className="korzina_orderingFormInputSvg" />
          </span>
          <span className="korzina_orderingFormElement">
            <p className="korzina_orderingFormInputName">Телефон</p>
            <div className="korzina_orderingFormInputContainer">
              <input className="korzina_orderingFormInput" type="number" />
            </div>
            <PhoneSvg className="korzina_orderingFormInputSvg" />
          </span>
          <span className="korzina_orderingFormElement">
            <p className="korzina_orderingFormInputName">Комментарий</p>
            <textarea
              className="korzina_orderingFormTextArea"
              placeholder="Введите текст"
            ></textarea>
          </span>
        </form>
        <button className="korzina_confirmOrderBtn">Подтвердить заказ</button>
      </div>

       <div></div>
      {korzina.length === 0 && <p>В вашей корзине пока пусто</p>}

    </div>
  );
};

export default Korzina;
