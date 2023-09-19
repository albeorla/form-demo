/**
 * Returns the default state for the form
 */
export const getDefaultState = () => ({
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  dob: "",
  ssn: "",
});
/**
 * Returns an object with all fields set to touched
 */
export const getAllTouched = () =>
  Object.keys(getDefaultState()).reduce(
    (acc, key) => ({ ...acc, [key]: true }),
    {}
  );
/**
 * Returns true if any of the fields have errors
 * @param errors - object with errors
 * @returns {boolean} - true if any of the fields have errors
 */
export const hasErrors = (errors) =>
  Object.keys(errors).some((key) => errors[key] !== "");

/**
 * Returns the default touched state for the form
 */
export const getDefaultTouched = () =>
  Object.keys(getDefaultState()).reduce(
    (acc, key) => ({
      ...acc,
      [key]: false,
    }),
    {}
  );
