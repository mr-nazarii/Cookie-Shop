import React from "react";
import { useDispatch } from "react-redux";
import { setModalInner } from "../../../store/actions";
import Button from "../../Button/Button";
import FormModal from "../../Form/Form";
import useServerData from "../../hooks/useServerData";
import FlexElement from "../../Reusable/FlexElement";
import ItemCard from "../Store/Item";

const Cart = (props) => {
  const [cookies, cartArray] = useServerData("cart");
  const dispatch = useDispatch();

  const cartOutput = () => {
    if (cartArray) {
      let num = 10;
      return (
        <>
          {cookies.map(
            ({ id, name, price, itemCode, color, url, starColor }) => {
              num++;
              const time = new Date().getTime().toString() + num;

              if (cartArray.includes(id)) {
                return (
                  <ItemCard
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
              } else {
                return null;
              }
            }
          )}
        </>
      );
    } else if (cartArray === null) {
      return <h1 className="emptyCart">Cart is empty</h1>;
    }
  };

  const cartEmptyChecker = (inner, place) => {
    if (cartArray) {
      if (cartArray.length === 0) {
        if (place === "form") return <h4>Cart is empty</h4>;
        return <h1 className="emptyCart">Cart is empty</h1>;
      } else {
        return inner;
      }
    } else if (cartArray === null) {
      if (place === "form") return <h4>Cart is empty</h4>;
      return <h1 className="emptyCart">Cart is empty</h1>;
    }
  };

  const giveForm = () => {
    return <FormModal closeFunc={props.closeFunc} />;
  };

  return (
    <>
      <FlexElement justify={"center"} color={"#000"} radius={"0px"}>
        <div>
          <Button
            backgroundColor={`#77bd5c`}
            textColor={"#ffffff"}
            width={"170px"}
            height={"55px"}
            btnName="openModal"
            onClick={() => {
              const object = {
                header: "Buying cookies?",
                headerModal: "#6dac5a",
                closeButton: true,
                bodyModal: "#aac9a4",
                actions: [],
                modalText: cartEmptyChecker(giveForm(), "form"),
              };
              dispatch(setModalInner(object));
            }}
          >
            Buy Cookies
          </Button>
        </div>{" "}
      </FlexElement>

      <FlexElement justify={"center"} color={"#000"} radius={"0px"}>
        {cartEmptyChecker(cartOutput(), "cart")}
      </FlexElement>
    </>
  );
};

export default Cart;
