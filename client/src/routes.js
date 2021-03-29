import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { Calculator } from "./pages/Calculator";
import { ListProjects } from "./pages/ListProjects";

export const useRoutes = (isAuth) => {
    if (!isAuth) {
        return (
            <Switch>
                {/* <Route to='/listProjects' exact >
                        <ListProjects />
                    </Route> */}
                <Route to='/listProjects' exact >
                    <Calculator />
                </Route>
                <Route to='/calculator' exact >
                    <Calculator />
                </Route>
                <Redirect to='/listProjects' />
            </Switch>
        );
    };

    return (
        <AuthPage />
    );
};