import { cartTypes } from './cart.types';
import { addItem } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case (cartTypes.TOGGLE_CART_HIDDEN):
      return { ...state, hidden: !state.hidden };
    case(cartTypes.ADD_ITEM):
      return {
        ...state,
        cartItems: addItem(state.cartItems, payload)
      };
    default:
      return state;
  }
};
