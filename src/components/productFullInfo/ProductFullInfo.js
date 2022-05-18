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
         thumbnailClass: "some"
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
            <ImageGallery
              thumbnailPosition="left"
              items={productImages}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
            />
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
