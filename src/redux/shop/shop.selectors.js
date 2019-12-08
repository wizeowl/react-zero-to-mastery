import { createSelector } from 'reselect';

const selectShop = ({ shop }) => shop;

export const selectCollectionsList = createSelector(
  [selectShop],
  ({ collections }) => Object.values(collections)
);

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }) => collections
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
);
