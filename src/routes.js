import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";

import { routes } from "./config";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path={routes.Login} exact component={Login} />
            <Route path={routes.Main} component={Main} />
        </BrowserRouter>
    );
};

export default Routes;
