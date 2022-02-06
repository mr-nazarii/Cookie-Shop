import React from "react";

import PropTypes from "prop-types";

import "./Modal.style.scss";

import Button from "../Button/Button";

import FlexElement from "../Reusable/FlexElement";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/actions";

const Modal = (props) => {
  const showM = useSelector((store) => store.modal.showModal);

  const modalInner = useSelector((store) => store.modal.modalInner);

  const dispatch = useDispatch();

  const closeModal = (e) => {
    dispatch(showModal(false));
  };

  if (showM === false) {
    return null;
  } else if (showM === true) {
    const { header, headerModal, closeButton, bodyModal, actions, modalText } =
      modalInner;

    return (
      <>
        <div onClick={closeModal} className={"modalBackground"}></div>

        <div className="modal">
          <FlexElement
            elementColor={"#ffffff"}
            justify={"space-between"}
            bgColor={headerModal}
            radius={"5px 5px 0px 0px"}
          >
            <h2>{header}</h2>
            {!closeButton ? (
              <Button
                backgroundColor={"rgba(33, 122, 60, 0)"}
                width={"35px"}
                height={"35px"}
                onClick={closeModal}
                closeButton={closeButton}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                  />
                  <path
                    fill="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                  />
                </svg>
              </Button>
            ) : null}
          </FlexElement>
          <FlexElement
            elementColor={"#ffffff"}
            justify={"center"}
            bgColor={bodyModal}
            radius={"0px"}
          >
            <FlexElement justify={"center"}>{modalText}</FlexElement>
          </FlexElement>
          <FlexElement
            elementColor={"#ffffff"}
            justify="center"
            radius={"0px 0px 5px 5px"}
            bgColor={bodyModal}
          >
            {actions
              ? actions.map((element) => {
                  return element;
                })
              : null}
          </FlexElement>
        </div>
      </>
    );
  }
};

Modal.propTypes = {
  actions: PropTypes.array,
};

Modal.defaultProps = {
  actions: [],
};

export default Modal;
