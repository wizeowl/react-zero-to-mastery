import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview';

import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  return (
    <div>
      <CollectionPreview {...collection} />
    </div>
  );
};

const mapStateToProps = (state, { match: { params: { collectionId } } }) => ({
  collection: selectCollection(collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);