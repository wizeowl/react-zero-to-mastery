import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { firestore, covertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import WithSpinner from '../../hoc/with-spinner/with-spinner.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import { selectShopIsLoading } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopComponent extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async snapshot => {
        const collections = covertCollectionsSnapshotToMap(snapshot);
        updateCollections(collections);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
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
  updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopComponent);