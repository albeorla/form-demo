import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DemoFormTemplate from "./DemoFormTemplate";

describe("<DemoFormTemplate />", () => {
  const defaultProps = {
    title: "Test Form",
    description: "This is a test form",
    onSubmit: jest.fn(),
    onReset: jest.fn(),
    children: <input type="text" />,
  };

  it("should render the form correctly", () => {
    const { getByText } = render(<DemoFormTemplate {...defaultProps} />);
    expect(getByText(defaultProps.title)).toBeInTheDocument();
    expect(getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("should call the onSubmit function when the form is submitted", async () => {
    const { getByRole } = render(<DemoFormTemplate {...defaultProps} />);
    await userEvent.type(getByRole("textbox"), "test input");
    await userEvent.click(getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(defaultProps.onSubmit).toHaveBeenCalled();
    });
  });

  it("should call the onReset function when the reset button is clicked", async () => {
    const { getByRole } = render(<DemoFormTemplate {...defaultProps} />);
    await userEvent.click(getByRole("button", { name: /reset/i }));
    await waitFor(() => {
      expect(defaultProps.onReset).toHaveBeenCalled();
    });
  });

  it("should display an error message when provided", () => {
    const errorMsg = "Test error message";
    const { getByText } = render(
      <DemoFormTemplate {...defaultProps} errorMsg={errorMsg} />
    );
    expect(getByText(errorMsg)).toBeInTheDocument();
  });
});
