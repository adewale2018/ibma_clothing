import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  women: 4,
  men: 5,
};

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shopData) => shopData.shopData
);

export const selectCollection = (collectionUrlParams) =>
  createSelector([selectShopData], (shopData) => shopData[collectionUrlParams]);
