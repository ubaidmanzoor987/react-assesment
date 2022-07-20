import { Row, Col, CardTitle } from "reactstrap";
import Draggable from "react-draggable";
import dollar from "../../assets/dollar.PNG";
import drive from "../../assets/drive.PNG";
import { StyledCardContainer } from "./Card.style";
import { useState } from "react";

const Card = (props) => {
  const [activeDrags, setActiveDrags] = useState(0);
  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const { title, amount, description } = props;

  return (
    <Draggable onStart={onStart} onStop={onStop}>
      <StyledCardContainer>
        <Row>
          <Col xs={12} className="d-flex justify-content-between">
            <CardTitle className="fw-bold" tag="h6">
              {title}
            </CardTitle>
            <img
              className="drive"
              src={drive}
              width="25"
              height="25"
              alt="drive"
            />
          </Col>
          <Col xs={12}>
            <Row>
              <Col xs={9}>
                <div>
                  <h6>
                    ${amount}
                    <p className="m-0" style={{ color: "grey", fontSize: 11 }}>
                      {description}
                    </p>
                  </h6>
                </div>
              </Col>
              <Col xs={3} className="d-flex justify-content-center">
                <img
                  src={dollar}
                  width="40"
                  height="40"
                  alt="dollar"
                  style={{ marginLeft: 28 }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledCardContainer>
    </Draggable>
  );
};
export default Card;
