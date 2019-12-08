import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectShop = ({ shop }) => shop;

export const selectShopCollections = createSelector(
  [selectShop],
  ({ collections }) => collections
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectShopCollections],
  collections => {
    const id = COLLECTION_ID_MAP[collectionUrlParam];
    return collections.find(collection => collection.id === id);
  }
);
