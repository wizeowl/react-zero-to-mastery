import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className='collection-page'>
      <div className="title">{title}</div>
      <div className="items">
        {
          items.map(item =>( <CollectionItem key={item.id} {...item}/>))
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match: { params: { collectionId } } }) => ({
  collection: selectCollection(collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);