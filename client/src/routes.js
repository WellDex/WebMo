import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";

export const useRoutes = (isAuth) => {
    if (!isAuth) {
        return (
            <div className='container-card'>
                <Switch>

                </Switch>
            </div>
        );
    };

    return (
        <AuthPage />
    );
};