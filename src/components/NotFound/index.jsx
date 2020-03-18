import React from "react";
import Styled from "styled-components";
import { Button } from "semantic-ui-react";

const StyledNotFound = Styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:100%;
  height:100vh;
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <div>404 not found</div>
      <Button
        onClick={() => {
          window.history.back();
        }}
      >
        Regresar
      </Button>
    </StyledNotFound>
  );
};

export default NotFound;
