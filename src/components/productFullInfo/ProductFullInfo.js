import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "./ProductFullInfo.css";

const ProductFullInfo = ({ product, addToKorzina, changePage }) => {
  //const [productImages, setProductImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onAddToKorzina = () => {
    addToKorzina();
  };

  const onBack = () => {
    changePage("main");
    document.querySelector("body").style.overflow = "scroll";
  };

  const rotationRight = () => {
    const imgNumberLenght = product.images.length;
    if (currentImageIndex + 1 >= imgNumberLenght) {
      return setCurrentImageIndex(0);
    }
    setCurrentImageIndex((prev) => prev + 1);
  };

  const rotationLeft = () => {
    const imgNumberLenght = product.images.length;
    if (currentImageIndex <= 0) {
      return setCurrentImageIndex(imgNumberLenght - 1);
    }
    setCurrentImageIndex((prev) => prev - 1);
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
            <div
              onClick={rotationLeft}
              className="productFullInfo_rotationLeft_container"
            >
              <button type="button"></button>
            </div>
            <img
              className="productFullInfo_image"
              alt="sneakers"
              src={product.images[currentImageIndex]}
            />
            <div
              onClick={rotationRight}
              className="productFullInfo_rotationRight_container"
            >
              <button type="button"></button>
            </div>
          </div>
          <p className="productFullInfo_shoe_size">Выбрать размер</p>
          <input value="3.5Y" className="productFullInfo_input_size" />
          <p className="productFullInfo_shoe_description">
            {product.description}
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
