import React, { useContext, useEffect, useState } from "react";
import { useRequest } from "../hooks/hookReq";
import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "../components/auth/login";
import { Register } from "../components/auth/register";
import { useMessage } from "../hooks/messageHook";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router";

export const AuthPage = (props) => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const history = useHistory();
    const { loading, error, req, clearError } = useRequest();
    const [form, setForm] = useState({ name: "", lastName: "", email: "", password: "" });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const registerHandler = async () => {
        try {
            const data = await req('/auth/register', 'POST', { ...form });
            message(data.message);

            history.push('/login');
        } catch (e) { };
    };

    const loginHandler = async () => {
        try {
            const data = await req('/auth/login', 'POST', { email: form.email, password: form.password });
            auth.login(data.token, data.userId, data.email);
        } catch (e) { };
    };

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1 className="txt-al-center">WebMo</h1>
                <Switch>
                    <Route path="/login">
                        <Login
                            data={form}
                            loading={loading}
                            changeHandler={changeHandler}
                            loginHandler={loginHandler}
                        />
                    </Route>
                    <Route path="/register">
                        <Register
                            data={form}
                            loading={loading}
                            changeHandler={changeHandler}
                            registerHandler={registerHandler}
                        />
                    </Route>
                    <Redirect to="/login" />
                </Switch>
            </div>
        </div>
    );
};