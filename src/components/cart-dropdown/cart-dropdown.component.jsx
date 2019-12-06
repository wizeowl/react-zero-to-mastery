import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

const Cart = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.length > 0
            ? cartItems.map(item => (<CartItem key={item.id} item={item}/>))
            : <span className='empty-message'>Your cart is empty.</span>
        }
      </div>
      <CustomButton onClick={() => {
        dispatch(toggleCartHidden());
        history.push('/checkout');
      }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
