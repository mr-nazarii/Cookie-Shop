import React from "react";
import useServerData from "../../hooks/useServerData";
import FlexElement from "../../Reusable/FlexElement";
import ItemCard from "../Store/Item";

const Favorite = (props) => {
  const [cookies, favArray] = useServerData("favorite");

  const favoriteOutput = () => {
    if (favArray) {
      let num = 20;
      return (
        <>
          {cookies.map(({ id, name, price, itemCode, color, url }) => {
            num++;
            const time = new Date().getTime().toString() + num;

            if (favArray.includes(id)) {
              return (
                <ItemCard
                  color={color}
                  id={id}
                  name={name}
                  price={price}
                  itemCode={itemCode}
                  key={time}
                  url={url}
                  //
                  closeFunc={props.closeFunc}
                  starColor={true}
                />
              );
            } else {
              return null;
            }
          })}
        </>
      );
    } else if (favArray === null) {
      return <h1 className="emptyCart">Favorite list is empty</h1>;
    }
  };

  return (
    <>
      <FlexElement justify={"center"} color={"#000"} radius={"0px"}>
        {favoriteOutput()}
      </FlexElement>
    </>
  );
};

export default Favorite;
