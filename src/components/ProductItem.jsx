import React, { useContext, useState } from "react";
import "../styles/ProductItem.css";
import addCart from "@icons/bt_add_to_cart.svg";
import AppContext from "../context/AppContext";

const ProductItem = ({ product }) => {
  const [cart, setCart] = useState([]);

  const { addToCart } = useContext(AppContext);
  const handleAddCartItem = (item) => {
    addToCart(item);
  };

  return (
    <div className="product-card">
      <img src={product.images[0]} alt="" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleAddCartItem(product)}>
          <img src={addCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
