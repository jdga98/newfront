import React from "react";
import Styled from "styled-components";
import "./style.css";
import { Link } from "react-router-dom";

const StyledMenu = Styled.ul`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9;
  background: white;
  top: 0px;
  left: ${({ visible }) => (visible ? "0px" : "-100%")};
  transition: .1s;
  padding:0px;
  margin:0px;
  list-style:none;
`;

const StyledLi = Styled(Link)`
  color:black;
`;

const NavResponsive = ({ visible, close }) => {
  return (
    <StyledMenu visible={visible} close={close}>
      <li className="itemNavResponsive">
        <span
          onClick={() => {
            close();
          }}
        >
          <i className="fas fa-times-circle"></i>
        </span>
      </li>
      <StyledLi to="/Login">
        <li className="itemNavResponsive">Inicio de sesion</li>
      </StyledLi>
      <StyledLi to="/Register">
        <li className="itemNavResponsive">Registro</li>
      </StyledLi>
      <StyledLi to="/Category">
        <li className="itemNavResponsive">Categorias</li>
      </StyledLi>
    </StyledMenu>
  );
};

export default NavResponsive;
