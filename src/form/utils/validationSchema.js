import * as Yup from "yup";

/**
 * Field validation schema for `firstName`
 */
const firstName = Yup.string().required("First name is required");

/**
 * Field validation schema for `lastName`
 */
const lastName = Yup.string().required("Last name is required");

/**
 * Field validation schema for `email`
 */
const email = Yup.string()
  .email("Invalid email address")
  .required("Email is required");

/**
 * Field validation schema for `address`
 */
const address = Yup.string().required("Address is required");

/**
 * Field validation schema for `city`
 */
const city = Yup.string().required("City is required");

/**
 * Field validation schema for `state`
 */
const state = Yup.string().required("State is required");

/**
 * Field validation schema for `zip`
 */
const zip = Yup.string()
  .required("Zip code is required")
  .matches(/^\d{5}(-\d{4})?$/, "Invalid zip code");

/**
 * Field validation schema for `phone`
 */
const phone = Yup.string()
  .required("Phone number is required")
  .matches(/^\d{10}$/, "Invalid phone number");

/**
 * Field validation schema for `dob`
 */
const dob = Yup.date()
  .transform((curr, orig) => (orig === "" ? undefined : curr))
  .required("Date of birth is required");

/**
 * Field validation schema for `ssn`
 */
const ssn = Yup.string()
  .required("Social security number is required")
  .matches(/^\d{3}-\d{2}-\d{4}$/, "Invalid SSN");

/**
 * Complete form validation schema. Composed all individual field validation schemas.
 */
export const validationSchema = Yup.object({
  firstName,
  lastName,
  email,
  address,
  city,
  state,
  zip,
  phone,
  dob,
  ssn,
});
