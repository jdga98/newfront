import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

const CategoryBar = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    axios
      .get("http://10.4.28.199:3001/categories")
      .then(res => {
        setState(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const tempData = { ...state };
  const newData = Object.values(tempData);
  return (
    <nav className="wrapCategoryNav">
      <ul className="listStyle">
      <li className="itemCategoryNav">Categorias</li>
        {!!newData ? (
          newData.map((item, index) => (
            <li className="itemCategoryNav" key={index}>
              {item.name}
              <ul className="dropdown" key={index}>
                {item.children.map((item2, index) => (
                  <li key={index} className="dropdownItem" >{item2.name}</li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <li className="itemCategoryNav">No data</li>
        )}
      </ul>
    </nav>
  );
};

export default CategoryBar;
