import React from "react";
import SectionPeriod from "../../components/SectionPeriod";
import SectionCards from "../../components/SectionCards";
import SectionHeading from "../../components/SectionHeading";
import SectionAreaChart from "../../components/SectionAreaChart";
import SectionTopCampaign from "../../components/SectionTopCampaign";
import SectionTopAdGroup from "../../components/SectionTopAdGroup";
import { StyledContainer } from "./index.styles";

const DashBoard = (props) => {
  return (
    <StyledContainer>
      <SectionHeading {...props} />
      <SectionPeriod />
      <SectionCards />
      <SectionAreaChart />
      <SectionTopCampaign />
      <SectionTopAdGroup />
    </StyledContainer>
  );
};

export default DashBoard;
