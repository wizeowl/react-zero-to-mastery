import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reduce';
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
