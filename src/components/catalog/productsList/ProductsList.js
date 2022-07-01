import React, { useState, useEffect, useRef } from "react";
import "./ProductList.css";
import { getProducts } from "../../../utils/firebase";
import Slider from "react-slick";
import Product from "./productsSlide/Product";

const ProductsList = ({ filter, changePage, setProduct, viewPort }) => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideSize, setSlideSize] = useState(0);

  const slidesToShow = () => {
    if (viewPort === "desktop") return 6;
    if (viewPort === "tablet") return 4;
    if (viewPort === "mobile") return 2;
  };

  const sliderRows = () => {
    if (viewPort === "desktop") return 1;
    if (viewPort === "tablet") return 2;
    if (viewPort === "mobile") return 3;
  };

  const catalogRows = () => {
    if (viewPort === "desktop") return 3;
    if (viewPort === "tablet") return 4;
    if (viewPort === "mobile") return 4;
  };

  const sliderStyles = {
    dots: true,
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    slidesToShow: slidesToShow(),
    rows: sliderRows(),
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: "linear",
  };

  const catalogStyles = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow(),
    rows: catalogRows(),
    slidesToScroll: slidesToShow(),
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  useEffect(() => {
    getProducts().then((response) => setProducts([...response]));
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

  const onButtonClick = () => {};
  return (
    <>
      {filter === "all" && (
        <Slider {...sliderStyles}>
          {products.map((product) => (
            <li>
              <Product openProduct={openProduct} product={product} />
            </li>
          ))}
        </Slider>
      )}
      {filter !== "all" && (
        <Slider {...catalogStyles}>
          {products.map((product) => (
            <li>
              <Product openProduct={openProduct} product={product} />
            </li>
          ))}
        </Slider>
      )}

      <button className="gmt" type="button" onClick={onButtonClick}></button>
    </>
  );
};

export default ProductsList;
