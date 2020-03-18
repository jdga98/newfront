import React from "react";
import Main from '../../components/main';
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import NavC from '../../components/NavCategory'

const Category = () => {
  return (
    <div>
    <div className="home">        
      <Nav/>
      <NavC/>
      <Main/>
      <Footer/>
    </div>
  </div>
  )
};

export default Category;
