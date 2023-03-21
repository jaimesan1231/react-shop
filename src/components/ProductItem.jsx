import React, { useContext, useEffect, useState } from "react";
import "../styles/ProductItem.css";
import addCart from "@icons/bt_add_to_cart.svg";
import itemAdded from "@icons/bt_added_to_cart.svg";
import AppContext from "../context/AppContext";
import deleteCart from "@icons/bt_delete_to_cart.svg";

const ProductItem = ({ product }) => {
  const [cart, setCart] = useState([]);
  const [isInCart, setIsInCart] = useState(false);
  const [cartIcon, setCartIcon] = useState(addCart);
  const { addToCart, removeCartItem, state } = useContext(AppContext);
  const handleAddCartItem = (item) => {
    setIsInCart(true);
    setCartIcon(itemAdded);
    addToCart(item);
  };
  const handleDeleteCartItem = (cardId) => {
    removeCartItem(cardId);
    setCartIcon(addCart);
    setIsInCart(false);
  };
  useEffect(() => {
    if (
      !state.cart.some((cartItem) => {
        return cartItem.id === product.id;
      })
    ) {
      setCartIcon(addCart);
      setIsInCart(false);
    }
  }, [state]);
  return (
    <div className="product-card">
      <img src={product.images[0]} alt="" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        {isInCart ? (
          <figure
            onClick={() => handleDeleteCartItem(product.id)}
            onMouseEnter={() => setCartIcon(deleteCart)}
            onMouseLeave={() => setCartIcon(itemAdded)}
          >
            <img src={cartIcon} alt="" />
          </figure>
        ) : (
          <figure onClick={() => handleAddCartItem(product)}>
            <img src={cartIcon} alt="" />
          </figure>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
