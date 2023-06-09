import React, { useContext } from "react";
import "../styles/ShoppingCartItem.css";
import closeIcon from "@icons/icon_close.png";
import AppContext from "../context/AppContext";

const ShoppingCartItem = ({ product }) => {
  const { removeCartItem } = useContext(AppContext);
  const handleRemove = () => {
    removeCartItem(product.id);
  };
  return (
    <li className="shopping-cart">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={closeIcon} alt="close" onClick={handleRemove} />
    </li>
  );
};

export default ShoppingCartItem;
