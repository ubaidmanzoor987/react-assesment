import styled from "@emotion/styled";
import { Col } from "reactstrap";

export const StyledCol = styled(Col)`
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
  .icon {
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid grey;
    width: 40px;
    height: 40px;
    @media (max-width: 767px) {
      display: flex;
    }
  }
`;
