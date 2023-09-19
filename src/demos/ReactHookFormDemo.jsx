import React from "react";
import ControlledInput from "../form/components/ControlledInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import DemoFormTemplate from "../form/components/DemoFormTemplate";
import { validationSchema } from "../form/utils/validationSchema";
import { getDefaultState, hasErrors } from "../form/utils/stateUtils";

export default function ReactHookFormDemo() {
  const { handleSubmit, reset, control, formState } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
    defaultValues: getDefaultState(),
  });

  return (
    <DemoFormTemplate
      title="React Hook Form"
      description="This form uses the React Hook Form library."
      onReset={reset}
      onSubmit={handleSubmit((submission) => {
        console.log(
          JSON.stringify({
            info: "Form was submitted successfully.",
            submission,
          })
        );
      })}
      errorMsg={
        hasErrors(formState.errors)
          ? "Please fix the errors above and submit again."
          : ""
      }
    >
      <ControlledInput
        type="text"
        name="firstName"
        label="First Name"
        placeholder="First Name"
        description="Your first name"
        control={control}
      />

      <ControlledInput
        type="text"
        name="lastName"
        label="Last Name"
        placeholder="Last Name"
        description="Your last name"
        control={control}
      />

      <ControlledInput
        name="email"
        type="email"
        label="Email"
        placeholder="john@amazon.com"
        description="Your email address"
        control={control}
      />

      <ControlledInput
        type="text"
        name="address"
        label="Address"
        placeholder="1 Day One Ave."
        description="Your street address"
        control={control}
      />

      <ControlledInput
        type="text"
        name="city"
        label="City"
        placeholder="New York"
        description="The name of your city"
        control={control}
      />

      <ControlledInput
        type="text"
        name="state"
        label="State"
        placeholder="NY"
        description="The two letter abbreviation for your state"
        control={control}
      />

      <ControlledInput
        type="text"
        name="zip"
        label="Zip Code"
        placeholder="10001"
        description="Your zip code (5 digits)"
        control={control}
      />

      <ControlledInput
        type="tel"
        name="phone"
        label="Phone Number"
        placeholder="5558675309"
        description="Your phone number (10 digits)"
        control={control}
      />

      <ControlledInput
        type="date"
        name="dob"
        label="Date of Birth"
        description="Your date of birth (mm/dd/yyyy)"
        control={control}
      />

      <ControlledInput
        type="text"
        name="ssn"
        label="Social Security Number"
        placeholder="123-45-6789"
        description="Your social security number (xxx-xx-xxxx)"
        control={control}
      />
    </DemoFormTemplate>
  );
}
