import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


import './App.css';
import HomePage from "./Components/HomePage/HomePage";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
export default class App extends React.Component
{
  render() {
    return (
      <div className="App">

        <Router>
          <Switch>
            <Route exact path="/" ><HomePage /></Route>
            <Route exact path="/not-found"><NotFoundPage /></Route>
            {/* <Route exact path="/favs"></Route> */}
            <Route path="/*" ><Redirect to="/not-found" /></Route>
          </Switch>
        </Router>





        
      </div>
    )
  }
}


