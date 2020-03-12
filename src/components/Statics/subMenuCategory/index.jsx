import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const SubMenu = ({ data }) => {
  console.log(data);
  return (
    <Menu compact>
      <Dropdown>
        <Dropdown.item>algo - 1</Dropdown.item>
      </Dropdown>
    </Menu>
  );
};

export default SubMenu;
