import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../_pages/Home";
import UserZone from "../_pages/UserZone";
import Us from "../_pages/Us";
import Services from "../_pages/Services";
import Clientes from "../_pages/Clientes";
import Productos from "../_pages/Productos";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/us" exact>
          <Us />
        </Route>
        <Route path="/userzone" exact>
          <UserZone />
        </Route>
        <Route path="/productos" exact>
          <Productos />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
        <Route path="/clientes" exact>
          <Clientes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
