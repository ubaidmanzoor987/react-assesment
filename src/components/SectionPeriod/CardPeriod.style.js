import styled from "@emotion/styled";
import { Card, CardTitle } from "reactstrap";

export const StyledCard = styled(Card)`
  background-color: "white";
  padding: 15px;
  border-radius: 10px;
  @media (max-width: 767px) {
    margin-top: 20px;
  } ;
`;

export const StyledCardTitle = styled(CardTitle)`
  margin-bottom: 25px;
`;
