import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { CollectionsOverviewContainer } from '../../components/collections-overview/collections-overview.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { CollectionPageContainer } from '../collection/collection.container';

class ShopComponent extends Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { match  } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopComponent);
