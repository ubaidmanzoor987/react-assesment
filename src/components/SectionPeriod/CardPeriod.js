import camera from "../../assets/camera.jpg";
import drive from "../../assets/drive.PNG";
import { CardText } from "reactstrap";
import { StyledCard, StyledCardTitle } from "./CardPeriod.style";

const CardPeriod = (props) => {
  return (
    <StyledCard>
      <div>
        <StyledCardTitle tag="h6">Data Period</StyledCardTitle>
        <CardText className="mb-0 mt-3 d-flex">
          <h5 className="m-0">15-06-2022 </h5>
          <p className="px-4 m-0 fw-bold">to</p>
          <h5> 14-07-2022</h5>
        </CardText>
        <CardText>
          <p
            className="m-0"
            style={{ color: "grey", fontSize: 12, fontWeight: 600 }}
          >
            Duration 30 days
          </p>
        </CardText>
      </div>
      <div className="d-flex w-100">
        <div className="" style={{ width: "90%" }}>
          <img src={camera} width="280" height="140" alt="pic" />
        </div>
        <div
          className="d-flex justify-content-end pr-2 "
          style={{ alignItems: "end" }}
        >
          <img src={drive} width="30" height="30" alt="drive" />
        </div>
      </div>
    </StyledCard>
  );
};
export default CardPeriod;
