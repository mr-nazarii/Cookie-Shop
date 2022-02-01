import React from "react";
import { useSelector } from "react-redux";
import FlexElement from "../../Reusable/FlexElement";
import Item from "./Item";

const Main = (props) => {
  const items = useSelector((store) => store.store.items);

  const outputInfo = () => {
    if (items) {
      let num = 0;
      return (
        <>
          {items.map(({ id, name, price, itemCode, color, url, starColor }) => {
            num++;
            const time = new Date().getTime().toString() + num;

            return (
              <Item
                color={color}
                id={id}
                name={name}
                price={price}
                itemCode={itemCode}
                key={time}
                url={url}
                starColor={starColor}
                //
                closeFunc={props.closeFunc}
              />
            );
          })}
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <FlexElement justify={"center"} color={"#000"} radius={"0px"}>
        {outputInfo()}
      </FlexElement>
    </>
  );
};

export default Main;
