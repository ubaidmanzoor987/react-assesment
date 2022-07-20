import React, { useState } from "react";
import Draggable from "react-draggable";

import { Row, Col, Container } from "reactstrap";
import CardGraph from "./CardGraph";
import CardPeriod from "./CardPeriod";

const SectionPeriod = () => {
  const [activeDrags, setActiveDrags] = useState(0);
  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  return (
    <Draggable onStart={onStart} onStop={onStop}>
      <Container className="mt-4">
        <Row>
          <Col md={8} xs={12}>
            <CardGraph />
          </Col>
          <Col md={4} xs={12}>
            <CardPeriod />
          </Col>
        </Row>
      </Container>
    </Draggable>
  );
};

export default SectionPeriod;
