
import React from "react";
import "./Breadcrum.scss";
import { isMobile } from "react-device-detect";

const Breadcrum = ({ items }) => {
  const posts = items;

  var parentPatth = [];
  //here we split the complete name cause is comming with slash.
  const split = String(posts.complete_name);
  const nameBread2 = split.split("/");
  const split2 = String(posts.parent_path);
  const parentSplit = split2.split("/");
  //here we map the namebread2 after split and put the content into a const called list then put into jsx return
  const list = nameBread2.length ? (
    nameBread2.map((post, i) => {
      parentPatth = parentSplit[i];
      return (
        <li key={i}>
          <a
            key={i}
            data-order={i}
            className="b-crum__link"
            href={
              "https://listado.kiero.co/listcategory/?id-" +
              parentPatth +
              "/#" +
              post
            }
          >
            <i className="fas fa-angle-right angle"></i> {post}{" "}
          </a>
        </li>
      );
    })
  ) : (
    <div className="products"></div>
  );
  //here we map the namebread2 after split and put the content into a const called list then put into jsx return, is for mobile
  const lstmobile = nameBread2.length ? (
    nameBread2.map((post, i) => {
      if (i < 1) {
        parentPatth = parentSplit[i];
        return (
          <li key={i}>
            <a
              key={i}
              data-order={i}
              className="b-crumMob__link"
              href={
                "https://listado.kiero.co/listcategory/?id-" +
                parentPatth +
                "/#" +
                post
              }
            >
              {" "}
              Ir a Listado{" "}
            </a>
          </li>
        );
      }
    })
  ) : (
    <div className="products"></div>
  );

  if (!isMobile) {
    return (
      <div className="b-crum">
        <ul className="b-crum__title">
          <li>
            <a className="b-crum__link" href="https://www.kiero.co/">
              {" "}
              Inicio{" "}
            </a>
          </li>{" "}
          {list}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="b-crumMob">
        <ul className="b-crumMob__title">
          {lstmobile}
        </ul>
      </div>
    );
  }
};


export default Breadcrum;
