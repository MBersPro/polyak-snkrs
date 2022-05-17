import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "./ProductFullInfo.css";

const ProductFullInfo = ({ product }) => {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    setProductImages(
      product.images.map((image) => ({
        original: image,
        thumbnail: image,
      }))
    );
  }, []);

  console.log(productImages);

  return (
    <>
      <div className="overlay">
        <div className="container"><ImageGallery items={productImages} /></div>
      </div>
      
    </>
  );
};

export default ProductFullInfo;
