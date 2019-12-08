import { createSelector } from 'reselect';

const selectShop = ({ shop }) => shop;

export const selectShopCollections = createSelector(
  [selectShop],
  ({ collections }) => collections
);
