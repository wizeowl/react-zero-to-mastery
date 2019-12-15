import { createSelector } from 'reselect';

const selectShop = ({ shop }) => shop;

export const selectCollectionsList = createSelector(
  [selectShop],
  ({ collections }) => (collections && Object.values(collections)) || []
);

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }) => collections
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => (collections && collections[collectionUrlParam]) || null
);

export const selectShopIsFetching = createSelector(
  [selectShop],
  ({ isFetching }) => isFetching
);

export const selectShopErrorMessage = createSelector(
  [selectShop],
  ({ errorMessage }) => errorMessage
);

export const selectShopIsLoading = createSelector(
  [selectShop],
  ({ errorMessage, collections, isFetching }) => isFetching || !collections
);
