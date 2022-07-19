import { Heart, Home } from "react-feather";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { StyledSidebar } from "./index.styles";

const SideBar = () => {
  return (
    <StyledSidebar breakPoint="sm">
      <Menu iconShape="square">
        <h4>AI Optimizer</h4>
        <div className="search">
          <Home />
          <p>Pixis Ai</p>
        </div>
        <SubMenu className="mt-4" title="Governance AI" icon={<Heart />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <SubMenu title="Targeting Ai" icon={<Heart />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <SubMenu title="Creative Ai" icon={<Heart />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </StyledSidebar>
  );
};

export default SideBar;
