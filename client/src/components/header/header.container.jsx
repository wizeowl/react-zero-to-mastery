import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Header from './header.component';

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

export const HeaderContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {
      data => {
        console.log(data);
        return <Header hidden={data && data.cartHidden}/>
      }
    }
  </Query>
);
