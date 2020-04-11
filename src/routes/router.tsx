import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Middleware from '../components/Middleware/auth';

import Login from "../pages/auth/login";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";

const Routes = (
  <Router>
    <Middleware />
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>
);

export default Routes;