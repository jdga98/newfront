import React from "react";
import { Provider } from "react-redux";
import Store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./_app.scss"

import Home from "./screens/Home";
import Detaill from "./screens/Detaill";
import ListCategory from "./screens/ListCategory";
import NotFound from "./components/NotFound";
import Category from "./components/Category";
import CompleteCategory from './components/CompleteCategory';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/listcategory" component={ListCategory} />
          <Route path="/product-details" component={Detaill} />
          <Route path="/category" component={Category} />
          <Route path="/complete-category" component={CompleteCategory} />
          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
