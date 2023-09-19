import React from "react";
import { useController } from "react-hook-form";
import { FormField, Input } from "@cloudscape-design/components";
import { css } from "@emotion/css";

const formFieldStyle = css`
  min-height: 6rem;
`;

const ControlledInput = ({ name, label, description, control, ...props }) => {
  if (!name) {
    throw new Error(
      "You must pass the `name` prop to the CustomInput component."
    );
  }
  if (!control) {
    throw new Error(
      "You must pass the `control` prop to the CustomInput component."
    );
  }

  const {
    field: { ref, value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({ name, control });

  return (
    <div className={formFieldStyle}>
      <FormField
        label={label}
        description={description}
        errorText={invalid && error?.message}
      >
        <Input
          ref={ref}
          name={name}
          value={value}
          onChange={(e) => onChange(e?.detail?.value)}
          onBlur={(e) => onBlur(e?.detail?.value)}
          invalid={invalid && error?.message}
          spellcheck={false}
          disableBrowserAutocorrect={true}
          autoComplete={false}
          {...props}
        />
      </FormField>
    </div>
  );
};

export default ControlledInput;
