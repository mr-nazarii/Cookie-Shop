import { initialState } from "./actions";
import { SHOW_MODAL, PASS_MODAL_INNER } from "./varNames";

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PASS_MODAL_INNER:
      return { ...state, modalInner: payload };

    case SHOW_MODAL:
      return { ...state, showModal: payload };

    default:
      return state;
  }
};

export default modalReducer;
