import React, { useContext } from "react";
import ShoppingCartItem from "../components/ShoppingCartItem";
import "../styles/MyOrder.css";
import leftArrow from "@icons/flechita.svg";
import AppContext from "../context/AppContext";

const MyOrder = ({ handleToggle }) => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className="product-detail">
      <div className="title-container">
        <img src={leftArrow} alt="arrow" onClick={handleToggle} />
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        <ul className="my-order-list">
          {state.cart.map((product, index) => (
            <ShoppingCartItem
              product={product}
              key={`product-${index}`}
              indexValue={index}
            />
          ))}
        </ul>

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>

        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
