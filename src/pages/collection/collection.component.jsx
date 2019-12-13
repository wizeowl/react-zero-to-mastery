import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import {
  CollectionContainer,
  CollectionItemContainer,
  CollectionItems,
  CollectionTitle
} from './collection.styles';

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
        {
          items.map(item => (<CollectionItemContainer key={item.id} {...item}/>))
        }
      </CollectionItems>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, { match: { params: { collectionId } } }) => ({
  collection: selectCollection(collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);