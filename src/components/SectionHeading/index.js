import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Menu as MenuIcon } from "react-feather";

import { StyledCol } from "./index.styles";

const SectionHeading = (props) => {
  const { handleToggleSidebar } = props;
  return (
    <Container>
      <Row>
        <StyledCol xs={2}>
          <div className="icon" onClick={() => handleToggleSidebar(true)}>
            <MenuIcon />
          </div>
        </StyledCol>
        <Col md={9} xs={10}>
          <h5>Google Ads Performance Report</h5>
        </Col>
        <Col md={3} xs={12} className="d-flex justify-content-center">
          <div style={{ backgroundColor: "grey", borderRadius: 5 }}>
            <p className="m-0 p-2" style={{ fontSize: 12 }}>
              This year: Jan 1, 2021 - Aug, 3, 2021{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionHeading;
