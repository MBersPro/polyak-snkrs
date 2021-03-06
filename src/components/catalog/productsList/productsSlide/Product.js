import React from "react";
import "./Product.css";

const Product = ({ openProduct, product }) => {
  return (
    <div className="testmest">
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
          <span>{product.name}</span>
        </p>
        <p className="productList_price_product">{product.price} ₽</p>
      </div>
    </div>
  );
};

export default Product;
