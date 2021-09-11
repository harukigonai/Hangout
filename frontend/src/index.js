import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/fonts.css";
import reportWebVitals from "./reportWebVitals";

import LoginSignUp from "./pages/LoginSignUp";
import Hangout from "./pages/Hangout";
import FriendsList from "./pages/FriendsList";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginSignUp} />
        <Route path="/hangout" component={Hangout} />
        <Route path="/friends-list" component={FriendsList} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
