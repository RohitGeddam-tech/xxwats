import React from "react";
import App from "./App";
import about from "./about/AboutPage";
import contact from "./Contacts";
import services from "./home/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/xxwats" exact component={App} />
          <Route path="/about" exact component={about} />
          <Route path="/contact" exact component={contact} />
          <Route path="/service" exact component={services} />
        </Switch>
      </>
    </Router>
  );
};

export default Routing;
