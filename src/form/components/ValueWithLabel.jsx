import { Box } from "@cloudscape-design/components";
import React from "react";

const ValueWithLabel = ({ label, children }) => (
  <div key={label}>
    <Box variant="awsui-key-label">{label}</Box>
    <div>{children}</div>
  </div>
);

export default ValueWithLabel;
