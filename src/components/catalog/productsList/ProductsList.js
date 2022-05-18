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

  var settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    rows: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <ul className="catalog_products-container">
        <Slider className="cell" {...settings}>
          {products.map((product) => (
            <li
              className="some1"
              onClick={() => openProduct(product)}
              key={product.id}
            >
              <div className="cell">
                <div className="productList_image_container">
                  <img
                    className="productList_image"
                    alt="sneakers"
                    src={product.images[0]}
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
        </Slider>
      </ul>
    </div>
  );
};

export default ProductsList;
