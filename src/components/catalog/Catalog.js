import React, {useState} from "react";
import "./Catalog.css";
import CatalogHead from "./catalogHead/CatalogHead";
import ProductsList from "./productsList/ProductsList";

const Catalog = ({ changePage, setProduct }) => {

  const [filter, setFilter] = useState("all");

  return (
    <div className="container catalog_container">
      <CatalogHead setFilter={setFilter} />
      <ProductsList
        filter={filter}
        setProduct={setProduct}
        changePage={changePage}
      />
    </div>
  );
};

export default Catalog;
