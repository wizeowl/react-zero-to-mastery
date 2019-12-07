import React from 'react';
import { connect } from 'react-redux';

import { addItem, clearItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, removeItem, addItem, clearItem }) => {
  const { id, name, imageUrl, quantity, price } = item;
  return (
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt='item'/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  clearItem: item => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);