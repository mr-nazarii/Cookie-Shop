import { useSelector } from "react-redux";

const useServerData = (param) => {
  const fav = useSelector((store) => store.local.favArray);
  const cart = useSelector((store) => store.local.cartArray);
  const items = useSelector((store) => store.store.items);

  if (param === "cart") {
    return [items, cart];
  } else if (param === "favorite") {
    return [items, fav];
  }
};

export default useServerData;
