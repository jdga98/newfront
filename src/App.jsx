import React from "react";
import { Provider } from "react-redux";
import Store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./_app.scss"

import Home from "./screens/Home";
import Detaill from "./screens/Detaill";
import Category from "./screens/Category";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Category" component={Category} />
          <Route path="/product-details" component={Detaill} />
          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
