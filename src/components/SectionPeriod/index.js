import React from "react";
import { Row, Col, Container } from "reactstrap";
import CardGraph from "./CardGraph";
import CardPeriod from "./CardPeriod";

const SectionPeriod = () => {
  return (
    <Container style={{marginTop: 20}}>
      <Row>
        <Col md={8} xs={12}>
          <CardGraph />
        </Col>
        <Col md={4} xs={12}>
          <CardPeriod />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionPeriod;
