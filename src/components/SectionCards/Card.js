import { Row, Col, CardTitle } from "reactstrap";
import dollar from "../../assets/dollar.PNG";
import drive from "../../assets/drive.PNG";
import { StyledCardContainer } from "./Card.style";

const Card = (props) => {
  const { title, amount, description } = props;

  return (
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
  );
};
export default Card;
