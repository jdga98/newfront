import React, { useState } from "react";
import { Button, Input, List, Accordion, Responsive } from "semantic-ui-react";
import Styled from "styled-components";
import "./style.css";

const StyledAccordion = Styled(Accordion)`
  width:100% !important;
`;

const Filters = ({ data }) => {
  const [state, setState] = useState({ activeIndex: -1 });
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = state;
    const newIndex = activeIndex === index ? -1 : index;
    setState({ activeIndex: newIndex });
  };
  const category = ["cat_1", "cat_2", "cat_3", "cat_4"];
  return (
    <div data={data} className="filter">
      <Responsive as="div" {...Responsive.onlyComputer}>
        <div>
          <h3>{data.category}</h3>
        </div>
        <div>
          <h4>Ordenar resultados</h4>
          <Button.Group>
            <Button>
              <i className="fas fa-th"></i>
            </Button>
            <Button>
              <i className="fas fa-list"></i>
            </Button>
          </Button.Group>
        </div>
        <div>
          <h4>Precio</h4>
          <Input placeholder="Minimo" type="number" />
          <Input placeholder="Maximo" type-="number" />
          <Button>Filtrar</Button>
        </div>
        <div>
          <h4>Categorias</h4>
          <List items={category} />
        </div>
      </Responsive>
      <Responsive as="div" maxWidth={768}>
        <StyledAccordion fluid styled>
          <Accordion.Title
            active={state.activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            Filtros
          </Accordion.Title>
          <Accordion.Content active={state.activeIndex === 0}>
            <div>
              <h4>Precio</h4>
              <Input placeholder="Minimo" type="number" />
              <Input placeholder="Maximo" type-="number" />
              <Button>Filtrar</Button>
            </div>
          </Accordion.Content>
        </StyledAccordion>
      </Responsive>
    </div>
  );
};

export default Filters;
