import React from "react";

import "./Button.style.scss";

const Button = (props) => {
  const btn = {
    backgroundColor: props.backgroundColor,
    width: props.width,
    height: props.height,
    display: props.closeButton,
    color: props.textColor,
  };
  return (
    <>
      <button
        onClick={props.onClick}
        className={`btn ${props.btnName}`}
        style={btn}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
