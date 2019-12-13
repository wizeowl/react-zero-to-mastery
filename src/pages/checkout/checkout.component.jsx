import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import {
  CheckoutBlock,
  CheckoutContainer,
  CheckoutHeader,
  CheckoutTotal,
  StripeButtonContainer,
  TestWarning
} from './checkout.styles';

const Checkout = ({ cartItems, total }) => {
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutBlock>
          <span>Product</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Description</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Quantity</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Price</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Remove </span>
        </CheckoutBlock>
      </CheckoutHeader>

      {
        cartItems.map(
          (item) => <CheckoutItem key={item.id} item={item}/>
        )
      }

      <CheckoutTotal>
        <span>TOTAL: ${total}</span>
      </CheckoutTotal>
      <TestWarning>
        *Please use the following test credit card for payments*
        <br/>
        4242 42424 4242 4242 - Exp: 01/20 - CVV : 123
      </TestWarning>
      <StripeButtonContainer price={total}/>
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
