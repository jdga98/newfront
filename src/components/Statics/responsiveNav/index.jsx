import React from "react";
import Styled from "styled-components";

const StyledMenu = Styled.div`
position: absolute;
width: 100%;
height: 100vh;
z-index: 100;
background: lime;
top: 0px;
left: ${({ visible }) => (visible ? "0px" : "-100%")};
`;

const NavResponsive = ({ visible }) => {
  return <StyledMenu visible={visible}></StyledMenu>;
};

export default NavResponsive;
