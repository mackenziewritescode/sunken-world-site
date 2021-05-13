import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./portfolio/components/Portfolio";
import Calculator from "./calculator/components/Calculator";
import DrumMachine from "./drum-machine/components/DrumMachine";
import Markdown from "./markdown-app/Markdown";
import PhotoSearch from "./photo-search/PhotoSearch";
import { default as RestfulForum } from "./restful-forum/App";

function ReactRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Portfolio} />
        <Route path="/restful-forum" component={RestfulForum} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/drum-machine" component={DrumMachine} />
        <Route path="/markdown-app" component={Markdown} />
        <Route path="/photo-search" component={PhotoSearch} />
      </Switch>
    </Router>
  );
}

export default ReactRouter;
