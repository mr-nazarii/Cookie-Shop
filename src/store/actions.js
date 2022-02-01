import { fakeServer } from "./fakeServer";
import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  SHOW_MODAL,
  PASS_MODAL_INNER,
  REQUEST_LOCAL_STORAGE_FAVORITES,
  REQUEST_LOCAL_STORAGE_CART,
} from "./varNames";

const initialState = {
  loading: false,
  items: [],
  error: "",
  showModal: false,
  modalInner: {},
  favArray: null,
  cartArray: [],
};

const showModal = (action) => {
  return {
    type: SHOW_MODAL,
    payload: action,
  };
};

const passModalInner = (object) => {
  return {
    type: PASS_MODAL_INNER,
    payload: object,
  };
};

const setModalInner = (object) => (dispatch) => {
  dispatch(showModal(true));
  dispatch(passModalInner(object));
};

const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST,
  };
};

const fetchItemsSuccess = (items) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
};

const fetchItemsFailure = (error) => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error,
  };
};

const fetchItems = (storage) => (dispatch) => {
  dispatch(fetchItemsRequest());

  fakeServer()
    .then((response) => {
      const items = response;
      dispatch(fetchItemsSuccess(items));
    })
    .catch((error) => {
      dispatch(fetchItemsFailure(error.message));
    });
};

const requestLocalStorageFavorites = (storage) => {
  return {
    type: REQUEST_LOCAL_STORAGE_FAVORITES,
    payload: storage,
  };
};

const requestLocalStorageCart = (storage) => {
  return {
    type: REQUEST_LOCAL_STORAGE_CART,
    payload: storage,
  };
};

const fetchLocalStorageItems = (id, element, action) => (dispatch) => {
  const array = JSON.parse(localStorage.getItem(element));
  if (element === "favArray") {
    if (action === "set") {
      if (array) {
        if (array.includes(id)) {
          dispatch(requestLocalStorageFavorites(array));
        } else {
          array.push(id);
          localStorage.setItem(element, JSON.stringify(array));
          dispatch(requestLocalStorageFavorites(array));
        }
      } else if (!array) {
        localStorage.setItem(element, JSON.stringify([id]));
        const array = JSON.parse(localStorage.getItem(element));
        dispatch(requestLocalStorageFavorites(array));
      }
    } else if (action === "remove") {
      if (array.length > 1) {
        const newArr = array.filter((elem) => elem !== id);
        localStorage.setItem(element, JSON.stringify(newArr));
        dispatch(requestLocalStorageFavorites(newArr));
      } else {
        localStorage.removeItem(element);
        dispatch(requestLocalStorageFavorites(null));
      }
    }
  } else if (element === "cartArray") {
    if (action === "set") {
      if (array) {
        if (array.includes(id)) {
          dispatch(requestLocalStorageCart(array));
        } else {
          array.push(id);
          localStorage.setItem(element, JSON.stringify(array));
          dispatch(requestLocalStorageCart(array));
        }
      } else if (!array) {
        localStorage.setItem(element, JSON.stringify([id]));
        const array = JSON.parse(localStorage.getItem(element));
        dispatch(requestLocalStorageCart(array));
      }
    } else if (action === "remove") {
      if (array.length > 1) {
        const newArr = array.filter((elem) => elem !== id);
        localStorage.setItem(element, JSON.stringify(newArr));
        dispatch(requestLocalStorageCart(newArr));
      } else {
        localStorage.removeItem(element);
        dispatch(requestLocalStorageCart([]));
      }
    }
  }
};

export {
  initialState,
  fetchItems,
  showModal,
  setModalInner,
  fetchLocalStorageItems,
  requestLocalStorageCart,
  requestLocalStorageFavorites,
};
