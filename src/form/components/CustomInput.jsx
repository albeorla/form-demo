import React from "react";
import { FormField, Input } from "@cloudscape-design/components";
import { css } from "@emotion/css";

const formFieldStyle = css`
  min-height: 6rem;
`;

const CustomInput = ({
  name,
  label,
  description,
  onChange,
  onBlur,
  invalid,
  errorMsg,
  value,
  ...props
}) => {
  return (
    <div className={formFieldStyle}>
      <FormField
        label={label}
        description={description}
        errorText={invalid && errorMsg}
      >
        <Input
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          invalid={invalid && errorMsg}
          spellcheck={false}
          disableBrowserAutocorrect={true}
          autoComplete={false}
          {...props}
        />
      </FormField>
    </div>
  );
};

export default CustomInput;
