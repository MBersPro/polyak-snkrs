import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "./ProductFullInfo.css";

const ProductFullInfo = ({ product, addToKorzina, changePage }) => {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    setProductImages(
      product.images.map((image) => ({
        original: image,
        thumbnail: image,
      }))
    );
  }, []);

  const onAddToKorzina = () => {
    addToKorzina();
  };

  const onBack = () => {
    changePage("main");
    document.querySelector("body").style.overflow = "scroll";
  };

  return (
    <>
      <div className="overlay">
        <div className="container_productFullInfo container">
          <button
            onClick={onBack}
            type="button"
            className="productFullInfo_back_btn"
          >
            ❮ Назад
          </button>
          <p className="productFullInfo_name_product">
            <span>{product.brand}</span>
            <span>{product.model}</span>
          </p>
          <p className="productFullInfo_price_product">{product.price} ₽</p>
          <div className="productFullInfo_image_container">
            <ImageGallery items={productImages} showPlayButton={false} />
            {/* <img
              className="productFullInfo_image"
              alt="sneakers"
              src={product.images[0]}
            /> */}
          </div>
          <p className="productFullInfo_shoe_size">Выбрать размер</p>
          <input value="3.5Y" className="productFullInfo_input_size" />
          <p className="productFullInfo_shoe_description">
            Кроссовки Air Jordan 1 Mid, дизайн которых вдохновлен оригинальной
            <br /> моделью AJ1, дают фанатам возможность пойти по стопам Майкла
            <br /> Джордана. Элементы отделки свежих цветов и классические
            материалы
            <br /> привносят новизну в привычный образ.
          </p>
          <p className="productFullInfo_color_model">Цвет модели:</p>
          <button
            onClick={onAddToKorzina}
            type="button"
            className="productFullInfo_addToBasket_btn"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductFullInfo;
