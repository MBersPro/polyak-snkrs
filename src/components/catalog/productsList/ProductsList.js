import React, { useState, useEffect, useMemo } from "react";
import "./ProductList.css";
import { getProducts } from "../../../utils/firebase";
import Slider from "react-slick";
import Product from "./productsSlide/Product";

const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

let interval = null;

const ProductsList = ({ filter, changePage, setProduct }) => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    getProducts().then((response) => setProducts([...response]));
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (filter === "all") {
      getProducts().then((response) => setProducts([...response]));
    } else {
      getProducts().then((response) =>
        setProducts([
          ...response.filter(
            (product) => product.brand === filter || product.model === filter
          ),
        ])
      );
    }
  }, [filter]);

  const openProduct = (product) => {
    setProduct(product);
    changePage("product");
    document.querySelector("body").style.overflow = "hidden";
  };

  const chunkedProducts = useMemo(() => chunk(products, 4), [products]);

  useEffect(() => {
    if (!chunkedProducts.length) return;
    if (interval) return;
    if (filter === "all") {
      interval = setInterval(() => {
        setCurrentSlide((prev) => {
          if (chunkedProducts.length - 1 <= prev) {
            return 0;
          }
          return prev + 1;
        });
      }, 5000);
    }
  }, [chunkedProducts]);

  const changeIndex = (as) => {
    // const indexx = 1
    setCurrentSlide(as);
    console.log(currentSlide);
  };

  return (
    <div className="carousel">
      <div
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
        className="carousel-inner"
      >
        {chunkedProducts.map((products) => (
          <div className="carousel-item">
            {products.map((product) => (
              <Product openProduct={openProduct} product={product} />
            ))}
          </div>
        ))}
      </div>
      <div className="bullets-container">
        {chunkedProducts.map((product, index) => 
        
          
          


          
          







          




          

          
          





          


          




          
          
          
          

          
            <div
              key={index}
              className={`bullets ${
                index === currentSlide ? "activeBullet" : ""
              }`}
              onClick={() => changeIndex(index)}
            ></div> 
        )}
      </div>
    </div>
  );
};

export default ProductsList;
