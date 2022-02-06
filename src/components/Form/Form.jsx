import { Field, Formik, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button/Button";
import "./Form.scss";
import CheckoutSchema from "./ValidationOfForm";
import React from "react";
import { requestLocalStorageCart } from "../../store/actions";

const FormModal = (props) => {
  const cartArray = useSelector((state) => state.local.cartArray);
  const items = useSelector((state) => state.store.items);

  const newItems = items.filter((item) => cartArray.includes(item.id));

  const dispatch = useDispatch();

  const handleSubmit = () => {
    newItems.map((item) => {
      for (const [key, value] of Object.entries(item)) {
        console.log(`${key}: ${value}`);
      }
      console.log("-------------------");
      dispatch(requestLocalStorageCart([]));
      localStorage.removeItem("cartArray");
      return true;
    });
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastname: "",
        age: "",
        address: "",
        mobileNumber: "",
      }}
      onSubmit={(values) => {
        for (const [key, value] of Object.entries(values)) {
          console.log(`${key}: ${value}`);
        }
        console.log("-----------------------------");
        handleSubmit();
        props.closeFunc();
      }}
      validationSchema={CheckoutSchema}
    >
      <Form className="form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>

          <Field
            className="form-group__input"
            name="firstName"
            id="firstName"
          />
          <ErrorMessage name="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>

          <Field className="form-group__input" name="lastname" id="lastname" />
          <ErrorMessage name="lastname" />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>

          <Field
            type="number"
            className="form-group__input"
            name="age"
            id="age"
            min="1"
          />

          <ErrorMessage name="age" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>

          <Field className="form-group__input" name="address" id="address" />
          <ErrorMessage name="address" />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>

          <Field
            type="number"
            className="form-group__input"
            name="mobileNumber"
            id="mobileNumber"
          />

          <ErrorMessage name="mobileNumber" />
        </div>
        <div className="form-button">
          <Button
            textColor={"#FFFFFF"}
            key="3"
            backgroundColor={"#5f944f"}
            width={"101px"}
            height={"41px"}
            btnName="closeModal"
            type="submit"
          >
            Checkout
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormModal;
