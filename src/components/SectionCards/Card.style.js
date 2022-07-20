import styled from "@emotion/styled";
import { Container } from "reactstrap";

export const StyledCardContainer = styled(Container)`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  min-height: 110px;
  margin-left: -10px;

  @media (max-width: 767px) {
    margin-left: -10px;
    margin-top: 20px;
    .drive {
      margin-right: 5%;
    }
  }
`;

export const StyledDiv = styled.div`
  @media (max-width: 767px) {
    .drive {
      margin-right: 8px !important;
    }
  }
`;
