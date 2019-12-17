import React from 'react';
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

export default CollectionPage;