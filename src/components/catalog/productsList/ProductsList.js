import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { getProducts } from "../../../utils/firebase";

const ProductsList = ({ changePage, setProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts([...response]));
  }, []);

  const openProduct = (product) => {    
    setProduct(product);
    changePage("product");
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li onClick={() => openProduct(product)} key={product.id}>
            <div className="productList_image_container">
              <img
                className="productList_image"
                alt="sneakers"
                src={product.images[0]}
              />
            </div>
          </li>
        ))}
      </ul>

      <div></div>
    </div>
  );
};

export default ProductsList;
