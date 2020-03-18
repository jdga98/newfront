import React from "react";
import { Button, Input, List } from "semantic-ui-react";

const Filters = ({ data }) => {
  const category = ["cat_1", "cat_2", "cat_3", "cat_4"];
  return (
    <div data={data}>
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
    </div>
  );
};

export default Filters;
