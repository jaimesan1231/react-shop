import React from "react";
import OrderItem from "./OrderItem";
import "../styles/Order.css";

const Order = () => {
  return (
    <div class="my-order-content">
      <div class="order">
        <p>
          <span>03.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
      </div>
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  );
};

export default Order;
