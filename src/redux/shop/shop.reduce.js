import { shopActionTypes } from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isLoading: true
};

export const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case (shopActionTypes.UPDATE_COLLECTIONS):
      return {
        ...state,
        isLoading: false,
        collections: payload
      };
    default:
      return state;
  }
};
