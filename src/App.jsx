import "./App.scss";
import React from "react";
import Modal from "./components/Modal/Modal";
import Main from "./components/Body/Store/Main";
import Header from "./components/Header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Body/Cart/Cart";
import Favorite from "./components/Body/Favorite/Favorite";
import { useDispatch } from "react-redux";
import { showModal } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();

  const closeModal = (e) => {
    dispatch(showModal(false));
  };

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Header />}>
          <Route path={"cart"} element={<Cart closeFunc={closeModal} />} />

          <Route index element={<Main closeFunc={closeModal} />} />
          <Route
            path={"favorite"}
            element={<Favorite closeFunc={closeModal} />}
          />
        </Route>
      </Routes>

      <Modal />
    </>
  );
};

export default App;
