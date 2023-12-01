import { useReducer } from "react";
import shoppingContext from "./shoppingContext";
import { shoppingReducer } from "./shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  const getBasketTotal = (basket) => {
    basket?.reduce((amount, item) => item.price + amount, 0);
  };
  const addToBasket = async (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  return (
    <shoppingContext
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
      }}
    >
      {props.children}
    </shoppingContext>
  );
};
