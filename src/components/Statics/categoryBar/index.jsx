import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const CategoryBar = () => {
  const [state, setState] = useState(null);
  axios
    .get("https://kieroapi.net/parent/category")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  return (
    <nav className="wrapCategoryNav">
      <ul className="listStyle">
        <li className="itemCategoryNav">categoria</li>
        <li className="itemCategoryNav">categoria</li>
        <li className="itemCategoryNav">categoria</li>
      </ul>
    </nav>
  );
};

export default CategoryBar;
