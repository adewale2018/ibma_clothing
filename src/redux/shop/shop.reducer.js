import { shopData } from "./shopdata";
const INITIAL_STATE = {
  shopData: shopData,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
