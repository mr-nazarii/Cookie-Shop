import React from "react";

const FlexElement = (props) => {
  const wrapper = {
    justifyContent: props.justify,
    background: props.bgColor,
    borderRadius: props.radius,
    color: props.elementColor,
    flexDirection: props.flexDirection ? props.flexDirection : "row",
  };
  return (
    <>
      <div className="wrapper" style={wrapper}>
        {props.children}
      </div>
    </>
  );
};

export default FlexElement;
