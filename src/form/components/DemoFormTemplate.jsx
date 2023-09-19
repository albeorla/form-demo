import React, { useLayoutEffect, useRef, useState } from "react";
import {
  Alert,
  Container,
  Form,
  SpaceBetween,
} from "@cloudscape-design/components";
import FormHeaderActions from "./FormHeaderActions";
import MetricsGrid from "./MetricsGrid";
import FormHeader from "./FormHeader";

/**
 * DemoFormTemplate is a template for a form that can be used to compare
 * different versions of the same form. It includes a header, actions, and
 * metrics grid.
 *
 * @param title - The title of the form
 * @param description - The description of the form
 * @param onSubmit - The submit handler
 * @param onReset - The reset handler
 * @param errorMsg - The error message to display
 * @param children - The form fields themselves
 * @returns {JSX.Element} - The form template wrapped around the form fields
 */
function DemoFormTemplate({
  title,
  description,
  onSubmit,
  onReset,
  errorMsg = "",
  children,
}) {
  const [resetCount, setResetCount] = useState(0);
  const [submissionCount, setSubmissionCount] = useState(0);

  // Use a ref to track the form renders
  const formRenderCount = useRef(0);

  useLayoutEffect(() => {
    formRenderCount.current += 1;
  });

  const handleOnSubmit = (e) => {
    setSubmissionCount(submissionCount + 1);
    if (onSubmit) {
      onSubmit(e);
    }
  };

  const handleOnReset = (e) => {
    setResetCount(resetCount + 1);
    if (onReset) {
      onReset(e);
    }
  };

  return (
    <form noValidate onSubmit={handleOnSubmit}>
      <Form
        variant="embedded"
        header={<FormHeader description={description} header={title} />}
        actions={<FormHeaderActions onClick={handleOnReset} />}
      >
        <SpaceBetween size="xl">
          <Container variant="stacked">
            <MetricsGrid
              renderCount={formRenderCount.current}
              submissionCount={submissionCount}
              resetCount={resetCount}
            />
          </Container>
          <Container variant="stacked">
            <SpaceBetween size="xs">{children}</SpaceBetween>
          </Container>
          {errorMsg.length > 0 && (
            <Alert key="form-error-msg" type="error">
              {errorMsg}
            </Alert>
          )}
        </SpaceBetween>
      </Form>
    </form>
  );
}

export default DemoFormTemplate;
