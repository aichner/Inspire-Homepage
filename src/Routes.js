//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { Route, Switch } from "react-router-dom";

//> Components
/**
 * HomePage: A basic template page
 */
import {
  HomePage,
  MessagePage,
  LoginPage,
  ProfilePage,
} from "./components/pages";
//#endregion

//#region > Config
//> MessagePage content
const messagePage = ["about", "privacy"];
//#endregion

//#region > Components
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/profile" component={ProfilePage} />
        {messagePage.map((page, i) => {
          return (
            <Route key={i} exact path={"/" + page} component={MessagePage} />
          );
        })}
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}
//#endregion

//#region > Exports
export default Routes;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 InspireMedia GmbH
 */
