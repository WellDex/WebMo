import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { ListProject } from "./pages/ListProject";

export const useRoutes = (isAuth) => {
    if (!isAuth) {
        return (
            <div className='container-card'>
                <Switch>
                    <Route to='/listProject' exact >
                        <ListProject />
                    </Route>
                    <Redirect to='/listProject' />
                </Switch>
            </div>
        );
    };

    return (
        <AuthPage />
    );
};