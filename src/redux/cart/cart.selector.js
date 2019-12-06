import { createSelector } from 'reselect';

const selectCart = ({ cart }) => cart;

export const selectCartItems = createSelector(
  [selectCart],
  ({ cartItems }) => cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((total, { quantity }) => total + quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  ({ hidden }) => hidden
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (total, { quantity, price }) => total + (quantity * price), 0
  )
);
