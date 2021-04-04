import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { Calculator } from "./pages/Calculator";
import { ListProjects } from "./pages/ListProjects";

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/listProjects' component={() => (<ListProjects/>)}/>
                <Route exact path='/calculator' component={() => (<Calculator/>)}/>
                <Route path='/calculator/:id?' render={(props) => (<Calculator {...props}/>)}/>
                <Redirect to='/listProjects' />
            </Switch>
        );
    };

    return (
        <AuthPage />
    );
};