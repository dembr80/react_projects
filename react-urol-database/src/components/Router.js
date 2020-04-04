import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App.js";
import Try from "./Try"

const Router = () => (
     <BrowserRouter >
        <Switch >
            <Route exact path = "/"  component = { App } /> 
            <Route path="/aloldal" component = {Try} />
        </Switch> 
     </BrowserRouter>
);

export default Router;