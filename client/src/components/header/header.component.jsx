import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Cart from '../cart-dropdown/cart-dropdown.component';
import { CartIconContainer } from '../cart-icon/cart-icon.container';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = ({ currentUser, hidden, signOut }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser
          ? (
            <OptionLink as='div' onClick={signOut}>
              SIGN OUT
            </OptionLink>
          )
          : <OptionLink to="/signin">SIGN IN</OptionLink>
      }
      <CartIconContainer/>
    </OptionsContainer>
    {!hidden && <Cart/>}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
