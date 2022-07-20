import styled from "@emotion/styled";
import { ProSidebar } from "react-pro-sidebar";

export const StyledSidebar = styled(ProSidebar)`
  color: black;
  .pro-sidebar-inner {
    background-color: white !important;
  }
  height: auto;
  @media (max-width: 767px) {
    height: 100vh;
  }
  .pro-icon-wrapper {
    background-color: white !important;
  }
  .pro-inner-list-item {
    background-color: white !important;
  }
  h4 {
    margin-left: 20px;
    color: black;
  }
  .search {
    margin-left: 20px;
    border: 0.5px solid lightgrey;
    border-radius: 6px;
    display: flex;
    width: 85%;
    align-items: center;
    padding: 8px;
    p {
      color: black;
      margin: 0px;
      padding-left: 10px;
    }
  }
`;
