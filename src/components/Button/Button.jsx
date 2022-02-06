import React from "react";

import "./Button.style.scss";

const Button = (props) => {
  const btn = {
    backgroundColor: props.backgroundColor,
    width: props.width,
    height: props.height,
    display: props.closeButton,
    color: props.textColor,
    flexGrow: props.flexGrow ? props.flexGrow : null,
  };
  return (
    <>
      <button
        onClick={props.onClick}
        className={`btn ${props.btnName}`}
        style={btn}
        type={props.type ? props.type : "button"}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
