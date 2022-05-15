import React from "react";
import "./Catalog.css";
import CatalogHead from "./catalogHead/CatalogHead";
import ProductsList from "./productsList/ProductsList";

const Catalog = () => {
  return (

    <div className="container catalog_container">
      <CatalogHead />
      <ProductsList/>

    </div>
  );
};

export default Catalog;
