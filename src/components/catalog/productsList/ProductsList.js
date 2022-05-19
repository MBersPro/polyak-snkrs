import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { getProducts } from "../../../utils/firebase";
import Slider from "react-slick";

const ProductsList = ({ changePage, setProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts([...response]));
  }, []);
  const openProduct = (product) => {
    setProduct(product);
    changePage("product");
    document.querySelector("body").style.overflow = "hidden";
  };

  return (
    <div>
      <ul className="catalog_products-container">
        {products.map((product) => (
          <li onClick={() => openProduct(product)} key={product.id}>
            <div className="cell">
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
