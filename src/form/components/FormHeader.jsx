import React from "react";
import { Container, Header } from "@cloudscape-design/components";

const FormHeader = ({ description, header }) => (
  <Container variant="stacked">
    <Header variant="h3" description={description}>
      {header}
    </Header>
  </Container>
);

export default FormHeader;
