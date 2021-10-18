import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updateItems;

    const existIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const beingUpdatedItem = state.items[existIndex];

    if (beingUpdatedItem) {
      const updateItem = {
        ...beingUpdatedItem,
        amount: beingUpdatedItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item); //it return a new array, ref and primitive
    }

    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    let updateItems;
    const beingRemovedItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const beingRemovedItem = state.items[beingRemovedItemIndex];

    const updateTotalAmount = state.totalAmount - beingRemovedItem.price;

    if (beingRemovedItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      console.log("before: ", beingRemovedItem);
      const updateItem = {
        ...beingRemovedItem,
        amount: beingRemovedItem.amount - 1,
      };
      console.log("after: ", updateItem);

      updateItems = [...state.items];
      updateItems[beingRemovedItemIndex] = updateItem;
    }

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addToCartHandler = (item) => {
    dispatchCart({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCart({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
