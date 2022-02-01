import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  fetchItems,
  requestLocalStorageCart,
  requestLocalStorageFavorites,
} from "./actions";
import storageReducer from "./storageReducer";
import modalReducer from "./modalReducer";
import localStorageReducer from "./loaclStorageReducer";

const rootReducer = combineReducers({
  store: storageReducer,
  modal: modalReducer,
  local: localStorageReducer,
});

const fav = JSON.parse(localStorage.getItem("favArray"));
const cart = JSON.parse(localStorage.getItem("cartArray"));

const dev =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, compose(applyMiddleware(thunk), dev));

store.dispatch(fetchItems());

store.dispatch(requestLocalStorageCart(cart));
store.dispatch(requestLocalStorageFavorites(fav));

export default store;
