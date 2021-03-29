import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { Calculator } from "./pages/Calculator";
import { ListProjects } from "./pages/ListProjects";

export const useRoutes = (isAuth) => {
    if (!isAuth) {
        return (
            <Switch>
                <Route path='/listProjects' component={() => (<ListProjects/>)}/>
                <Route path='/calculator' component={() => (<Calculator/>)}/>
                <Redirect to='/listProjects' />
            </Switch>
        );
    };

    return (
        <AuthPage />
    );
};