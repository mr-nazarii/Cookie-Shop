import { initialState } from "./actions";
import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
} from "./varNames";

const storageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ITEMS_REQUEST:
      return { ...state, loading: true };

    case FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, items: payload, error: "" };

    case FETCH_ITEMS_FAILURE:
      return { ...state, loading: false, items: [], error: payload };

    default:
      return state;
  }
};

export default storageReducer;
