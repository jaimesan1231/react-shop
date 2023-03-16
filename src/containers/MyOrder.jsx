import React, { useContext } from "react";
import ShoppingCartItem from "../components/ShoppingCartItem";
import "../styles/MyOrder.css";
import leftArrow from "@icons/flechita.svg";
import AppContext from "../context/AppContext";

const MyOrder = ({ children }) => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside class="product-detail">
      <div class="title-container">
        <img src={leftArrow} alt="arrow" />
        <p class="title">My order</p>
      </div>

      <div class="my-order-content">
        {state.cart.map((product, index) => (
          <ShoppingCartItem
            product={product}
            key={`product-${index}`}
            indexValue={index}
          />
        ))}

        <div class="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>

        <button class="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
