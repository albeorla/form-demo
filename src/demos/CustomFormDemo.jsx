import React, { useState } from "react";
import { ValidationError } from "yup";
import CustomInput from "../form/components/CustomInput";
import DemoFormTemplate from "../form/components/DemoFormTemplate";
import { validationSchema } from "../form/utils/validationSchema";
import {
  getAllTouched,
  getDefaultState,
  getDefaultTouched,
  hasErrors,
} from "../form/utils/stateUtils";

const ReactBuiltInFormDemo = () => {
  const [form, setForm] = useState(getDefaultState());
  const [errors, setErrors] = useState(getDefaultState());
  const [touched, setTouched] = useState(getDefaultTouched());

  const handleChange = (name) => (event) => {
    const { detail = { value: "" } } = event;
    setForm({ ...form, [name]: detail.value });
  };

  const handleBlur = (name) => async () => {
    try {
      await validationSchema.validateAt(name, form);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      console.error("Error:", error.errors.join(", "));
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.errors }));
    } finally {
      setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(form, { abortEarly: false });
      setErrors(getDefaultState());
    } catch (error) {
      if (error instanceof ValidationError) {
        let errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setErrors(errors);
      } else {
        console.error(error);
      }
    } finally {
      setTouched(getAllTouched());
      console.log("Form submitted:", form);
    }
  };

  const handleReset = async (event) => {
    event.preventDefault();
    setForm(getDefaultState());
    setTouched(getDefaultTouched());
  };

  return (
    <DemoFormTemplate
      title="React Built-In Form"
      description="This form uses React's built-in hooks."
      onSubmit={handleSubmit}
      onReset={handleReset}
      errorMsg={
        hasErrors(errors) ? "Please fix the errors above and submit again." : ""
      }
    >
      <CustomInput
        type="text"
        name="firstName"
        label="First Name"
        placeholder="First Name"
        description="Your first name"
        onChange={handleChange("firstName")}
        onBlur={handleBlur("firstName")}
        invalid={touched.firstName && errors.firstName}
        errorMsg={touched.firstName && errors.firstName}
        value={form.firstName}
      />

      <CustomInput
        type="text"
        name="lastName"
        label="Last Name"
        placeholder="Last Name"
        description="Your last name"
        onChange={handleChange("lastName")}
        onBlur={handleBlur("lastName")}
        invalid={touched.lastName && errors.lastName}
        errorMsg={touched.lastName && errors.lastName}
        value={form.lastName}
      />

      <CustomInput
        name="email"
        type="email"
        label="Email"
        placeholder="john@amazon.com"
        description="Your email address"
        onChange={handleChange("email")}
        onBlur={handleBlur("email")}
        invalid={touched.email && errors.email}
        errorMsg={touched.email && errors.email}
        value={form.email}
      />

      <CustomInput
        type="text"
        name="address"
        label="Address"
        placeholder="1 Day One Ave."
        description="Your street address"
        onChange={handleChange("address")}
        onBlur={handleBlur("address")}
        invalid={touched.address && errors.address}
        errorMsg={touched.address && errors.address}
        value={form.address}
      />

      <CustomInput
        type="text"
        name="city"
        label="City"
        placeholder="New York"
        description="The name of your city"
        onChange={handleChange("city")}
        onBlur={handleBlur("city")}
        invalid={touched.city && errors.city}
        errorMsg={touched.city && errors.city}
        value={form.city}
      />

      <CustomInput
        type="text"
        name="state"
        label="State"
        placeholder="NY"
        description="The two letter abbreviation for your state"
        onChange={handleChange("state")}
        onBlur={handleBlur("state")}
        invalid={touched.state && errors.state}
        errorMsg={touched.state && errors.state}
        value={form.state}
      />

      <CustomInput
        type="text"
        name="zip"
        label="Zip Code"
        placeholder="10001"
        description="Your zip code (5 digits)"
        onChange={handleChange("zip")}
        onBlur={handleBlur("zip")}
        invalid={touched.zip && errors.zip}
        errorMsg={touched.zip && errors.zip}
        value={form.zip}
      />

      <CustomInput
        type="tel"
        name="phone"
        label="Phone Number"
        placeholder="5558675309"
        description="Your phone number (10 digits)"
        onChange={handleChange("phone")}
        onBlur={handleBlur("phone")}
        invalid={touched.phone && errors.phone}
        errorMsg={touched.phone && errors.phone}
        value={form.phone}
      />

      <CustomInput
        type="date"
        name="dob"
        label="Date of Birth"
        description="Your date of birth (mm/dd/yyyy)"
        onChange={handleChange("dob")}
        onBlur={handleBlur("dob")}
        invalid={touched.dob && errors.dob}
        errorMsg={touched.dob && errors.firstName}
        value={form.dob}
      />

      <CustomInput
        type="text"
        name="ssn"
        label="Social Security Number"
        placeholder="123-45-6789"
        description="Your social security number (xxx-xx-xxxx)"
        onChange={handleChange("ssn")}
        onBlur={handleBlur("ssn")}
        invalid={touched.ssn && errors.ssn}
        errorMsg={touched.ssn && errors.ssn}
        value={form.ssn}
      />
    </DemoFormTemplate>
  );
};
export default ReactBuiltInFormDemo;
