import React from "react";
import { Badge, Box, Container, Grid } from "@cloudscape-design/components";
import ValueWithLabel from "./ValueWithLabel";

/**
 * MetricsGrid is a component that displays the number of renders, resets, and submissions.
 *
 * @param renderCount - The number of times the form has been rendered.
 * @param resetCount - The number of times the form has been reset.
 * @param submissionCount - The number of times the form has been submitted.
 */
const MetricsGrid = ({
  renderCount = 0,
  resetCount = 0,
  submissionCount = 0,
}) => (
  <Container variant="stacked">
    <Grid gridDefinition={[{ colspan: 4 }, { colspan: 4 }, { colspan: 4 }]}>
      <ValueWithLabel label="Total Renders">
        <Box variant="h4" fontSize="body-m" fontWeight="normal">
          <Badge color="blue">{renderCount}</Badge>
        </Box>
      </ValueWithLabel>
      <ValueWithLabel label="Submissions">
        <Box variant="h4" fontSize="body-m" fontWeight="normal">
          <Badge color="blue">{submissionCount}</Badge>
        </Box>
      </ValueWithLabel>
      <ValueWithLabel label="Resets">
        <Box variant="h4" fontSize="body-m" fontWeight="normal">
          <Badge color="blue">{resetCount}</Badge>
        </Box>
      </ValueWithLabel>
    </Grid>
  </Container>
);

export default MetricsGrid;
