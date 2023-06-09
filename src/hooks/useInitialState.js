import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeCartItem = (cardId) => {
    setState({
      ...state,
      cart: state.cart.filter((product) => product.id !== cardId),
    });
  };
  return {
    state,
    addToCart,
    removeCartItem,
  };
};

export default useInitialState;
