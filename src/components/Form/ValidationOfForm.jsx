import { object, string, number } from "yup";

const CheckoutSchema = object({
  firstName: string().max(20, "Invalid name").required("Required"),

  lastname: string().max(20, "Invalid name").required("Required"),

  age: number().required("Required"),

  address: string().max(50, "Too long address").required("Required"),

  mobileNumber: number().required("Required"),
});

export default CheckoutSchema;
