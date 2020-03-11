import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

const CategoryBar = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    axios
      .get("http://10.4.28.199:3001/categories")
      .then(res => {
        setState(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <nav className="wrapCategoryNav">
      <ul className="listStyle">
        <li className="itemCategoryNav"></li>
      </ul>
    </nav>
  );
};

export default CategoryBar;
