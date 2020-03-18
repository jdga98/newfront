import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import Styled from "styled-components";

const StyledCard = Styled(Card)`
    margin: 5px 16px !important;
`;
const StyledWrapImg = Styled.div`
    max-width: 220px;
    max-height: 220px;
    margin: auto;
`;
const StyledButton = Styled(Button)`
    background:#cf0a2c !important;
    color:white !important;
`;
const Cards = ({ data }) => {
  return (
    <StyledCard data={data}>
      <StyledWrapImg className="sizeImg">
        <Image src={data.url} />
      </StyledWrapImg>
      <Card.Content>
        <Card.Header>{data.title}</Card.Header>
        <Card.Meta>20/20/2020</Card.Meta>
        <Card.Description>{data.title}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <StyledButton floated="right">Comprar</StyledButton>
      </Card.Content>
    </StyledCard>
  );
};

export default Cards;
