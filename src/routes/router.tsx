import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../pages/home";

import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Account from "../pages/account";

import Items from "../pages/items";
import Reports from "../pages/reports";
import Invoices from "../pages/invoices";
import Expenses from '../pages/expenses';
import Business from "../pages/business";
import Outbuilding from "../pages/outbuilding";
import Settings from "../pages/settings";
import Contacts from '../pages/contacts';

import Offices from "../pages/offices";
import OfficeDetail from "../pages/offices/details";
import OfficeCreate from "../pages/offices/create";

function Routes(){
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/account" component={Account} />
      <Route exact path="/invoices" component={Invoices} />
      <Route exact path="/expenses" component={Expenses} />
      <Route exact path="/reports" component={Reports} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/business" component={Business} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/outbuilding" component={Outbuilding} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/offices" component={Offices} />
      <Route path="/offices/show/:id" component={OfficeDetail} />
      <Route path="/offices/new" component={OfficeCreate} />
    </Router>
  )
};

export default Routes;