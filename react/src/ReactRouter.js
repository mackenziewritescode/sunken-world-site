import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Portfolio from "./portfolio/Portfolio"
import Calculator from "./calculator/Calculator"
import DrumMachine from "./drum-machine/DrumMachine"
import Markdown from "./markdown-app/Markdown"
import PhotoSearch from "./photo-search/PhotoSearch"

function ReactRouter() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Portfolio} />
                <Route path="/calculator" component={Calculator} />
                <Route path="/drum-machine" component={DrumMachine} />
                <Route path="/markdown-app" component={Markdown} />
                <Route path="/photo-search" component={PhotoSearch} />
            </Switch>
        </Router>
    )
}

export default ReactRouter