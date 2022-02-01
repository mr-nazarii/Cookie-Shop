import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import "./Item.scss";
import Star from "../Star";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchLocalStorageItems, setModalInner } from "../../../store/actions";

const ItemCard = (props) => {
  const [showDesc, setShowDesc] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const [favColor, setFavColor] = useState("#ffffff");

  const dispatch = useDispatch();

  const fav = JSON.parse(localStorage.getItem("favArray"));

  const location = useLocation();

  const showInfo = () => {
    if (!showDesc) {
      setShowDesc(true);
    } else {
      setShowDesc(false);
    }
  };

  const showCardOnDisplay = (e) => {
    if (showCard) {
      setShowCard(false);
    } else {
      setShowCard(true);
    }
  };

  const passObject = (e) => {
    if (fav) {
      if (!fav.includes(props.id)) {
        setFavColor("#ffcd2b");
        dispatch(fetchLocalStorageItems(props.id, "favArray", "set"));
      } else {
        setFavColor("#ffffff");
        dispatch(fetchLocalStorageItems(props.id, "favArray", "remove"));
      }
    } else {
      dispatch(fetchLocalStorageItems(props.id, "favArray", "set"));
      setFavColor("#ffcd2b");
    }
  };

  useEffect(() => {
    if (fav && fav.includes(props.id)) {
      setFavColor("#ffcd2b");
    }
  }, [fav, props.id]);

  const cartAdd = (e) => {
    if (location.pathname === "/cart") {
      setShowCard(false);
      dispatch(fetchLocalStorageItems(props.id, "cartArray", "remove"));
    } else {
      dispatch(fetchLocalStorageItems(props.id, "cartArray", "set"));
    }
  };

  const border = {
    borderTop: `13px solid ${props.color}`,
    paddingTop: " 1px",
    background: props.color,
  };

  const inner = {
    background: props.color,
  };

  return (
    <>
      {showCard ? (
        <div className="itemCard">
          <div className="itemCard__wrapper">
            <h1 className="itemCard__title">{props.name}</h1>
            {location.pathname === "/favorite" ? (
              <button
                onClick={() => {
                  showCardOnDisplay();
                  passObject();
                }}
                className="itemCard__favorite"
              >
                <Star fill={favColor} class={"favoriteStar"} />
              </button>
            ) : (
              <button
                onClick={() => {
                  passObject();
                }}
                className="itemCard__favorite"
              >
                <Star fill={favColor} class={"favoriteStar"} />
              </button>
            )}
          </div>

          <img
            className="itemCard__cookieImg"
            src={props.url}
            style={border}
            alt=""
          />
          <div onClick={showInfo} className="itemCard__showBtn">
            Show more...
          </div>
          <div className="itemCard__infoWrap">
            {!showDesc ? (
              <div className="itemCard__info"></div>
            ) : (
              <div className="itemCard__infoShow">
                <p className="itemCard__price" style={inner}>
                  price {props.price} pack
                </p>

                {location.pathname === "/cart" ? (
                  <Button
                    btnTitle="Open first modal"
                    backgroundColor={`${props.color}`}
                    textColor={"#FFFFFF"}
                    width={"160px"}
                    height={"35px"}
                    btnName="openModal"
                    onClick={() => {
                      const object = {
                        header:
                          "Do you want to remove these cookies from the cart?",
                        headerModal: "#783419",
                        closeButton: true,
                        bodyModal: "#c9b0a4",
                        actions: [
                          <Button
                            textColor={"#FFFFFF"}
                            key="3"
                            backgroundColor={"#782c19"}
                            width={"101px"}
                            height={"41px"}
                            btnName="closeModal"
                            onClick={() => {
                              props.closeFunc();
                              cartAdd();
                            }}
                          >
                            Remove
                          </Button>,
                        ],
                        modalText: "❗",
                      };
                      dispatch(setModalInner(object));
                    }}
                  >
                    Remove from cart
                  </Button>
                ) : (
                  <Button
                    btnTitle="Open first modal"
                    backgroundColor={`${props.color}`}
                    textColor={"#FFFFFF"}
                    width={"160px"}
                    height={"35px"}
                    btnName="openModal"
                    onClick={() => {
                      const object = {
                        header: "Do you want to add these cookies to the cart?",
                        headerModal: "#197278",
                        closeButton: true,
                        bodyModal: "#C5C9A4",
                        actions: [
                          <Button
                            textColor={"#FFFFFF"}
                            key="3"
                            backgroundColor={"#197278"}
                            width={"101px"}
                            height={"41px"}
                            btnName="closeModal"
                            onClick={() => {
                              props.closeFunc();
                              cartAdd();
                            }}
                          >
                            Add
                          </Button>,
                        ],
                        modalText: "Tastes good 🍪",
                      };

                      dispatch(setModalInner(object));
                    }}
                  >
                    Add to cart
                  </Button>
                )}

                <span className="itemCard__code" style={inner}>
                  {props.itemCode}
                </span>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ItemCard;
