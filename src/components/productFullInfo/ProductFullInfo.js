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
  };

  return (
    <>
      <div className="overlay">
        <div className="container">
          <ImageGallery items={productImages} />
          <button onClick={onAddToKorzina} type="button">
            Добавить в корзину
          </button>
          <button onClick={onBack} type="button">Назад</button>
        </div>
      </div>
    </>
  );
};

export default ProductFullInfo;
