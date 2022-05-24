import React from "react";
import "./Product.css"

const Product = ({ openProduct, product }) => {
  return (
    <div
      onClick={() => openProduct(product)}
      key={product.id}
      className="product"
    >
        <div className="productList_image_container">
          <img
            className="productList_image"
            alt="sneakers"
            src={product.catalogImage}
          />
        </div>
        <p className="productList_name_product">
          <span>{product.brand}</span>
          <span>{product.model}</span>
        </p>
        <p className="productList_price_product">{product.price} ₽</p>
    </div>
  );
};

export default Product;
