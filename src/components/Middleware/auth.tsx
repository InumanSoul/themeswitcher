import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class MiddlewareAuth extends Component {
  render() {
    const app_token = localStorage.getItem("app_token");

    return (
      <React.Fragment>
        {app_token ? "" : <Redirect to="login" />}
      </React.Fragment>
    );
  }
}

export default MiddlewareAuth;