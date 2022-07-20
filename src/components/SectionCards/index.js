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
      title: "Clicks",
      description: "Click on your campaign content",
      amount: 90,
    },
    {
      id: 4,
      title: "Conversion Rate",
      description: "Conversion Rate",
      amount: 9.14,
    },
    {
      id: 5,
      title: "Total Cost",
      description: "Cost",
      amount: 10.04,
    },
    {
      id: 6,
      title: "Cost Per Click",
      description: "Per Click",
      amount: 4.23,
    },
    {
      id: 7,
      title: "Clicks Through Rate",
      description: "CTR",
      amount: 6.19,
    },
    {
      id: 8,
      title: "Impression",
      description: "The number of times your campaign show",
      amount: 2347,
    },
  ];
  return (
    <Container className="mb-4">
      <Row>
        {data.map((dt) => (
          <Col md={3} xs={12} key={dt.id} className="mt-4">
            <Card {...dt} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SectionCards;
