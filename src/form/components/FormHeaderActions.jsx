import React from "react";
import { Button, SpaceBetween } from "@cloudscape-design/components";

const FormHeaderActions = ({ onClick }) => (
  <SpaceBetween size="s" direction="horizontal" alignItems="end">
    <Button variant="primary" formAction="submit">
      Submit
    </Button>
    <Button formAction="none" variant="secondary" onClick={onClick}>
      Reset
    </Button>
  </SpaceBetween>
);

export default FormHeaderActions;
