import React from "react";
import { Row, Container } from "reactstrap";
import Card from "./Card";
import { StyledDiv } from "./Card.style";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

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
  let ind = -1;

  return (
    <Container className="mt-2 mb-5 margin-left">
      <Row>
        <ResponsiveReactGridLayout
          cols={{ lg: 4, md: 4, sm: 1, xs: 1, xxs: 1 }}
          isResizable={false}
          isBounded
        >
          {data.map((dt) => {
            if (ind >= 4) {
              ind = -1;
            }
            ind++;
            return (
              <StyledDiv
                key={dt.id.toString()}
                data-grid={{ x: ind, y: 0, w: 1, h: 0.8 }}
                className="mt-4"
              >
                <Card {...dt} />
              </StyledDiv>
            );
          })}
        </ResponsiveReactGridLayout>
      </Row>
    </Container>
  );
};

export default SectionCards;
