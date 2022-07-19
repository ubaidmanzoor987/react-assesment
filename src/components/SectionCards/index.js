import React from "react";
import { Row, Col, Container } from "reactstrap";
import Card from "./Card";

const SectionCards = () => {
  const data = [
    {
      id: 1,
      title: "Cost Per conversion",
      description: "Per conversion",
      amount: 32.98,
    },
    {
      id: 2,
      title: "Conversion",
      description: "page visit that converted to transactions",
      amount: 8.67,
    },
    {
      id: 3,
      title: "Cost Per conversion",
      description: "Per conversion",
      amount: 32.98,
    },
    {
      id: 4,
      title: "Conversion",
      description: "page visit that converted to transactions",
      amount: 8.67,
    },
    {
      id: 5,
      title: "Cost Per conversion",
      description: "Per conversion",
      amount: 32.98,
    },
    {
      id: 6,
      title: "Conversion",
      description: "page visit that converted to transactions",
      amount: 8.67,
    },
    {
      id: 7,
      title: "Cost Per conversion",
      description: "Per conversion",
      amount: 32.98,
    },
    {
      id: 8,
      title: "Conversion",
      description: "page visit that converted to transactions",
      amount: 8.67,
    },
  ];
  return (
    <Container className="mb-4">
      <Row>
        {data.map((dt) => (
          <Col
            md={3}
            xs={12}
            key={dt.id}
            className="mt-4"
          >
            <Card {...dt} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SectionCards;
