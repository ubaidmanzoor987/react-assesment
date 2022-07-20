import React from "react";
import { Row, Container } from "reactstrap";
import CardGraph from "./CardGraph";
import CardPeriod from "./CardPeriod";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const SectionPeriod = () => {
  return (
    <Container className="mt-4" style={{ marginLeft: -10 }}>
      <Row>
        <ResponsiveReactGridLayout
          cols={{ lg: 3, md: 3, sm: 1, xs: 1, xxs: 1 }}
          isResizable={false}
          isBounded
        >
          <div key="a" data-grid={{ x: 0, y: 0, w: 2, h: 1.6 }}>
            <CardGraph />
          </div>
          <div key="b" data-grid={{ x: 2, y: 0, w: 1, h: 1.6 }}>
            <CardPeriod />
          </div>
        </ResponsiveReactGridLayout>
      </Row>
    </Container>
  );
};

export default SectionPeriod;
