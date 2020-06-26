import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import List from "./list";
import View from "./view";


function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/list" exact={true} component={List} />
          <Route path="/list/:id" exact={true} component={View} />
          <Redirect from="/" to="/list" />
          <Route path="*" exact={true} component={List} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
