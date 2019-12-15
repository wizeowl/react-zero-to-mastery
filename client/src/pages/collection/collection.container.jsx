import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../hoc/with-spinner/with-spinner.component';
import { selectShopIsLoading } from '../../redux/shop/shop.selectors';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectShopIsLoading
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
