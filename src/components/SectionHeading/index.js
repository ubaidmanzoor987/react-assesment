import React from "react";
import { Row, Col, Container } from "reactstrap";

const SectionHeading = () => {
  return (
    <Container>
      <Row>
        <Col xs={9}>
          <h5>Google Ads Performance Report</h5>
        </Col>
        <Col xs={3} className="d-flex justify-content-end">
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
