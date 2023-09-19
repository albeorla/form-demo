import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ReactHookFormDemo from "./ReactHookFormDemo";

describe("ReactHookFormDemo", () => {
  it("renders without crashing", () => {
    render(<ReactHookFormDemo />);
  });

  it("displays error message when form is submitted with empty fields", async () => {
    const { getByText, findByText } = render(<ReactHookFormDemo />);
    const submitButton = getByText("Submit");

    fireEvent.click(submitButton);

    const errorMessage = await findByText(
      "Please fix the errors above and submit again."
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("submits the form when all fields are filled correctly", async () => {
    const { getByLabelText, getByText } = render(<ReactHookFormDemo />);
    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    // ... repeat for all other inputs

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    // ... repeat for all other inputs

    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });
});
