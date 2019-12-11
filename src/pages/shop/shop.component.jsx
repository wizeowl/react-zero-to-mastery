import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../hoc/with-spinner/with-spinner.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectShopIsLoading } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopComponent extends Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { match, isLoading } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={
          (props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>
        }/>
        <Route path={`${match.path}/:collectionId`} render={
          (props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        }/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectShopIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopComponent);