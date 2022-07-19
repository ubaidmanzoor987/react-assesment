import { Container, Row, Col, CardTitle } from "reactstrap";
import dollar from "../../assets/dollar.PNG";
import drive from "../../assets/drive.PNG";

const Card = (props) => {
  const { title, amount, description } = props;

  return (
    <Container
      style={{ backgroundColor: "white", padding: 15, borderRadius: 10, minHeight: 110 }}
    >
      <Row>
        <Col xs={12} className="d-flex justify-content-between">
          <CardTitle className="fw-bold" tag="h6">
            {title}
          </CardTitle>
          <img src={drive} width="25" height="25" alt="dollar" />
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
              <img src={dollar} width="40" height="40" alt="dollar" style={{marginLeft: 28}} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Card;
