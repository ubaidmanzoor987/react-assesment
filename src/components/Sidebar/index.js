import React from "react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import governance from "../../assets/governance.PNG";
import targeting from "../../assets/targeting.PNG";
import creative from "../../assets/creative.PNG";
import pixis from "../../assets/pixis.PNG";

import "react-pro-sidebar/dist/css/styles.css";
import { StyledSidebar } from "./index.styles";

const SideBar = (props) => {
  const { toggled, handleToggleSidebar } = props;

  return (
    <StyledSidebar
      toggled={toggled}
      breakPoint="sm"
      onToggle={handleToggleSidebar}
    >
      <Menu iconShape="square">
        <h4>AI Optimizer</h4>
        <div className="search">
          <img
            src={pixis}
            width="40"
            height="30"
            alt="creative"
            style={{ marginTop: 5 }}
          />
          <p>Pixis AI</p>
        </div>
        <SubMenu
          className="mt-4"
          title="Governance AI"
          icon={<img src={governance} width="25" height="25" alt="dollar" />}
        >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <SubMenu
          title="Targeting AI"
          icon={<img src={targeting} width="40" height="30" alt="targeting" />}
        >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
        <SubMenu
          title="Creative AI"
          icon={<img src={creative} width="40" height="30" alt="creative" />}
        >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </StyledSidebar>
  );
};

export default SideBar;
