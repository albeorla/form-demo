import React, { useRef } from "react";
import {
  Alert,
  AppLayout,
  Box,
  ColumnLayout,
  ContentLayout,
  Header,
  SpaceBetween,
} from "@cloudscape-design/components";
import "@cloudscape-design/global-styles/index.css";
import ReactHookFormDemo from "./demos/ReactHookFormDemo";
import CustomFormDemo from "./demos/CustomFormDemo";

export default function App() {
  const appLayout = useRef();

  return (
    <AppLayout
      ref={appLayout}
      contentType="form"
      content={
        <ContentLayout
          header={
            <SpaceBetween size="m">
              <Header
                variant="h1"
                description="Side-by-Side Comparison of React Hook Form and Custom Form with Built-in React Hooks"
              >
                React Hook Form vs Custom Form with Built-in React Hooks
              </Header>
            </SpaceBetween>
          }
        >
          <SpaceBetween size="xl">
            <Alert type="info">
              <Box fontSize="body-m">
                This demo compares the performance of forms build using React's
                Built-in Hooks and React Hook Form.
                <br />
                Try pairing this demo with the{" "}
                <a
                  href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Developer Tools
                </a>{" "}
                browser plugin and use the profiler to for a more in-depth
                comparison.
                <Box
                  as="span"
                  margin={{ top: "xs" }}
                  color="text-status-info"
                  fontSize="body-m"
                >
                  <strong>Note:</strong> To reset statistics, reload the page.
                </Box>
              </Box>
            </Alert>
            <ColumnLayout columns={2} borders>
              <ReactHookFormDemo />
              <CustomFormDemo />
            </ColumnLayout>
          </SpaceBetween>
        </ContentLayout>
      }
      navigationHide
      toolsHide
    />
  );
}
