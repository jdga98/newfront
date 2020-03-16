import React, { useState, useEffect } from "react";
import "./style.css";
import Call from "./../../../api/index.js";

const CategoryBar = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    Call.get("categories", "/categories")
      .then(res => setState(res.data.data))
      .catch(err => {
        console.log(err);
      });
  }, []);
  const tempData = { ...state };
  const newData = Object.values(tempData);
  return (
    <nav className="wrapCategoryNav">
      <ul className="listStyle">
        <li className="itemCategoryNav">
          Categorias
          <ul className="dropdown">
            {!!newData ? (
              newData.map((item, index) => (
                <li className="dropdownItem" key={index}>
                  {item.name}
                  <ul className="dropdown" key={index}>
                    {item.children.map((item2, index) => (
                      <li key={index} className="dropdownItem">
                        {item2.name}
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            ) : (
              <li className="itemCategoryNav">No data</li>
            )}
          </ul>
        </li>
        {!!newData ? (
          newData.map((item, index) => (
            <li className="itemCategoryNav" key={index}>
              {item.name}
              <ul className="dropdown" key={index}>
                {item.children.map((item2, index) => (
                  <li key={index} className="dropdownItem">
                    {item2.name}
                  </li>
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
