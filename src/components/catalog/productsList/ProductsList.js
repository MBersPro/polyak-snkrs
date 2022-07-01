import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { getProducts } from "../../../utils/firebase";
import Slider from "react-slick";
import Product from "./productsSlide/Product";

const ProductsList = ({ filter, changePage, setProduct, viewPort }) => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideSize, setSlideSize] = useState(0);
  const [sliderSettings, setSliderSettings] = useState({});

  const slidesToShow = () => {
    if (viewPort === "desktop") return 1;
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
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 4000,
    slidesToShow: slidesToShow(),
    slidesToScroll: 1,
    rows: sliderRows(),
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: "linear",
    initialSlide: 0,
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
    setSliderSettings({ ...sliderStyles });
    getProducts().then((response) => setProducts([...response]));
  }, []);

  useEffect(() => {
    if (filter === "all") {
      getProducts().then((response) => setProducts([...response]));
      setSliderSettings({ ...sliderStyles });
    } else {
      getProducts().then((response) =>
        setProducts([
          ...response.filter(
            (product) => product.brand === filter || product.model === filter
          ),
        ])
      );
      setSliderSettings({ ...catalogStyles });
    }
  }, [filter, viewPort]);

  const openProduct = (product) => {
    setProduct(product);
    changePage("product");
    document.querySelector("body").style.overflow = "hidden";
  };

  const onButtonClick = () => {};
  return (
    <>
      <Slider className="slider" {...sliderSettings}>
        {products.map((product) => (
          <li>
            <Product openProduct={openProduct} product={product} />
          </li>
        ))}
      </Slider>
      <button className="gmt" type="button" onClick={onButtonClick}></button>
    </>
  );
};

export default ProductsList;
