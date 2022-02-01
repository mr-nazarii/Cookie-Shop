import useServerData from "../../hooks/useServerData";
import FlexElement from "../../Reusable/FlexElement";
import ItemCard from "../Store/Item";

const Cart = (props) => {
  const [cookies, cartArray] = useServerData("cart");

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

  return (
    <>
      <FlexElement justify={"center"} color={"#000"} radius={"0px"}>
        {cartOutput()}
      </FlexElement>
    </>
  );
};

export default Cart;
