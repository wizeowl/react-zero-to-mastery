import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsList } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {
        collections.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest}></CollectionPreview>
        ))
      }
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsList
});

export default connect(mapStateToProps)(CollectionsOverview);