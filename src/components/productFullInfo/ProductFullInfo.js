import React, { useState, useEffect } from "react";
import { ImageGallery } from "react-image-gallery";

const ProductFullInfo = ({ product }) => {
    const [productImages, setProductImages] = useState({});

  useEffect(() => {
    setProductImages([
      product.images.map((image) => ({
        original: image,
        thumbnail: image,
      })),
    ]);
  }, []);

  return <div>ksiodfos</div>;
};

export default ProductFullInfo;
