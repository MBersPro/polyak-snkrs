import React from "react";
import "./Catalog.css";
import CatalogHead from "./catalogHead/CatalogHead";
import ProductsList from "./productsList/ProductsList";

const Catalog = ({ changePage, setProduct }) => {
  return (
    <div className="container catalog_container">
      <CatalogHead />
      <ProductsList setProduct={setProduct} changePage={changePage} />
    </div>
  );
};

export default Catalog;
