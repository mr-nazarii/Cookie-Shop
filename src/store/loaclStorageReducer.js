import { initialState } from "./actions";
import {
  REQUEST_LOCAL_STORAGE_CART,
  REQUEST_LOCAL_STORAGE_FAVORITES,
} from "./varNames";

const localStorageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_LOCAL_STORAGE_FAVORITES:
      return { ...state, favArray: payload };

    case REQUEST_LOCAL_STORAGE_CART:
      return { ...state, cartArray: payload };

    default:
      return state;
  }
};

export default localStorageReducer;
