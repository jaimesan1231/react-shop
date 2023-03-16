import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import useGetProducts from "../hooks/useGetProducts";
import "../styles/ProductList.css";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <div className="cards-container">
      {products &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
