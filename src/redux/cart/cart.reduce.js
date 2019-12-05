import { cartTypes } from './cart.types';

const INITIAL_STATE = {
  hidden: true
};

export const cartReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case (cartTypes.TOGGLE_CART_HIDDEN):
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
