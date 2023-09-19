import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import CustomFormDemo from "./CustomFormDemo";

describe("CustomFormDemo", () => {
  // ... other tests

  it("should clear error message when input is valid", async () => {
    const { getByPlaceholderText, queryByText } = render(<CustomFormDemo />);
    const input = getByPlaceholderText("First Name");

    fireEvent.change(input, { target: { value: "John" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(queryByText("Required")).not.toBeInTheDocument();
    });
  });

  it("should clear all errors when form is submitted with valid inputs", async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <CustomFormDemo />
    );
    const firstNameInput = getByPlaceholderText("First Name");
    const lastNameInput = getByPlaceholderText("Last Name");

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });

    fireEvent.click(getByText("Submit"));

    await waitFor(() => {
      expect(
        queryByText("Please fix the errors above and submit again.")
      ).not.toBeInTheDocument();
    });
  });

  it("should display error message when form is submitted with invalid inputs", async () => {
    const { getByText } = render(<CustomFormDemo />);
    const submitButton = getByText("Submit");

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        getByText("Please fix the errors above and submit again.")
      ).toBeInTheDocument();
    });
  });
});
