import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

// import Middleware from '../components/Middleware/auth';

import Home from "../pages/home";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Dashboard from "../pages/dashboard";
import Sucursales from "../pages/sucursales";
import SucursalesDetail from "../pages/sucursales/details";

const Routes = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
    <Route exact path="/sucursales" component={Sucursales} />
    <Route path="/sucursales/show/:id" component={SucursalesDetail} />
  </Router>
);

export default Routes;