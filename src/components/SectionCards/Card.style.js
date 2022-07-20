import styled from "@emotion/styled";
import { Container } from "reactstrap";

export const StyledCardContainer = styled(Container)`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  min-height: 110px;

  @media (max-width: 767px) {
    .drive {
      margin-right: 8px !important;
    }
  }
`;
