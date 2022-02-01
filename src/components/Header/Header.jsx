import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import FlexElement from "../Reusable/FlexElement";
import "./Header.scss";

const Header = (props) => {
  const cool = {
    width: "30px",
    padding: "0px",
  };

  return (
    <>
      <div className="header">
        <FlexElement justify={"space-between"} color={"#ffffff"} radius={"0px"}>
          <NavLink
            to={"cart"}
            className={({ isActive }) =>
              isActive ? "active buttonTextActive" : "passive buttonTextPassive"
            }
          >
            <img src="images/cart.svg" width={"30"} style={cool} alt="" />
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active " : "passive ")}
          >
            <img
              src="images/cookie-main.svg"
              width={"30"}
              style={cool}
              alt=""
            />
          </NavLink>

          <NavLink
            to={"favorite"}
            className={({ isActive }) => (isActive ? "active " : "passive ")}
          >
            <img src="images/favorite.svg" alt="" />
          </NavLink>
        </FlexElement>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
