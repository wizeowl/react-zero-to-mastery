import React from 'react';
import { CartIconWrapper, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, count }) => (
  <CartIconWrapper onClick={toggleCartHidden}>
    <ShoppingIcon></ShoppingIcon>
    <ItemCount>{count}</ItemCount>
  </CartIconWrapper>
);

export default CartIcon;
