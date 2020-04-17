import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../pages/home";

import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Account from "../pages/account";

import Items from "../pages/items";
import Reports from "../pages/reports";
import Invoices from "../pages/invoices";
import Business from "../pages/business";
import Outbuilding from "../pages/outbuilding";
import Settings from "../pages/settings";

import Sucursales from "../pages/sucursales";
import SucursalesDetail from "../pages/sucursales/details";
import SucursalesCreate from "../pages/sucursales/create";

function Routes(){
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/account" component={Account} />
      <Route exact path="/invoices" component={Invoices} />
      <Route exact path="/reports" component={Reports} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/business" component={Business} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/outbuilding" component={Outbuilding} />
      <Route exact path="/sucursales" component={Sucursales} />
      <Route path="/sucursales/show/:id" component={SucursalesDetail} />
      <Route path="/sucursales/create" component={SucursalesCreate} />
    </Router>
  );
};

export default Routes;