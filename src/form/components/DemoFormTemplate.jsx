import {
  Alert,
  Container,
  Form,
  SpaceBetween,
} from "@cloudscape-design/components";
import FormHeader from "./FormHeader";
import { useLayoutEffect, useRef, useState } from "react";
import FormHeaderActions from "./FormHeaderActions";
import MetricsGrid from "./MetricsGrid";

function DemoFormTemplate({
  title,
  description,
  onSubmit,
  onReset,
  errorMsg = "",
  children,
  FormHeaderActionsComponent = FormHeaderActions,
  MetricsGridComponent = MetricsGrid,
}) {
  const [resetCount, setResetCount] = useState(0);
  const [submissionCount, setSubmissionCount] = useState(0);
  const formRenderCount = useRef(0);

  useLayoutEffect(() => {
    formRenderCount.current += 1;
  });

  const handleOnSubmit = (e) => {
    setSubmissionCount(submissionCount + 1);
    onSubmit(e);
  };

  const handleOnReset = (e) => {
    setResetCount(resetCount + 1);
    onReset(e);
  };

  return (
    <form noValidate onSubmit={handleOnSubmit}>
      <Form
        variant="embedded"
        header={<FormHeader description={description} header={title} />}
        actions={<FormHeaderActionsComponent onClick={handleOnReset} />}
      >
        <SpaceBetween size="xl">
          <Container variant="stacked">
            <MetricsGridComponent
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
