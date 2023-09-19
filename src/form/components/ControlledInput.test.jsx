import React from "react";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import ControlledInput from "./ControlledInput";

describe("<ControlledInput />", () => {
  const DummyFormComponent = ({ children }) => {
    const { control } = useForm();

    return children(control);
  };

  it("renders without crashing", () => {
    render(
      <DummyFormComponent>
        {(control) => (
          <ControlledInput name="test" label="Test Label" control={control} />
        )}
      </DummyFormComponent>
    );
  });

  it("handles value changes", () => {
    const { getByRole } = render(
      <DummyFormComponent>
        {(control) => (
          <ControlledInput name="test" label="Test Label" control={control} />
        )}
      </DummyFormComponent>
    );

    const input = getByRole("textbox");
    userEvent.type(input, "test input");

    // Fire a custom event with detail property
    fireEvent.change(input, {
      target: { value: "test input" },
      detail: { value: "test input" },
    });

    expect(input).toHaveValue("test input");
  });

  it("throws an error when the `name` prop is missing", () => {
    expect(() =>
      render(
        <DummyFormComponent>
          {(control) => (
            <ControlledInput label="Test Label" control={control} />
          )}
        </DummyFormComponent>
      )
    ).toThrow("You must pass the `name` prop to the CustomInput component.");
  });

  it("throws an error when the `control` prop is missing", () => {
    expect(() =>
      render(
        <DummyFormComponent>
          {() => <ControlledInput name="test" label="Test Label" />}
        </DummyFormComponent>
      )
    ).toThrow("You must pass the `control` prop to the CustomInput component.");
  });
});
