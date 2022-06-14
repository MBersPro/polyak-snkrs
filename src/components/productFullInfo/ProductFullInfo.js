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
        <div className="productFullInfo_BackBtnAndImage_container">
          <button
            onClick={onBack}
            type="button"
            className="productFullInfo_back_btn"
          >
            ❮ Назад
          </button>
          
          <div className="productFullInfo_image_container">
            <div
              onClick={rotationLeft}
              className="productFullInfo_rotationLeft_container"
            >
              <button type="button" className="left">❮</button>
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
              <button type="button"  className="right">❯</button>
            </div>
          </div>
        </div>
        <div className="productFullInfo_TxtAndAddBtn_container">
          <p className="productFullInfo_name_product">
            <span>{product.brand}</span>
            <span>{product.model}</span>
          </p>
          <p className="productFullInfo_price_product">{product.price} ₽</p>
          <p className="productFullInfo_shoe_size">Выбрать размер</p>
          <select className="select_shoe_size_ProductFullInfo">
            <option className="option_shoe_size_ProductFullInfo">3.5 Y</option>
            <option className="option_shoe_size_ProductFullInfo">4.0 Y</option>
            <option className="option_shoe_size_ProductFullInfo">4.5 Y</option>
            <option className="option_shoe_size_ProductFullInfo">5.0 Y</option>
            <option className="option_shoe_size_ProductFullInfo">5.5 Y</option>
            <option className="option_shoe_size_ProductFullInfo">6.0 Y</option>
            <option className="option_shoe_size_ProductFullInfo">6.5 Y</option>
            <option className="option_shoe_size_ProductFullInfo">7.0 Y</option>
          </select>
          <p className="productFullInfo_shoe_description">
            {product.description}
          </p>
          <p className="productFullInfo_color_model">Цвет модели:</p>
          <div className="productFullInfo_addToBasket_btn_container">
          <button
            onClick={onAddToKorzina}
            type="button"
            className="productFullInfo_addToBasket_btn"
          >
            Добавить в корзину
          </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ProductFullInfo;
