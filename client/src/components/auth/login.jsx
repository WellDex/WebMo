import React from 'react';
import { NavLink } from "react-router-dom";

export const Login = (props) => {
    return (
        <div className="card blue darken-1">
            <div className="card-content white-text">
                <span className="card-title">Авторизация</span>
                <div>
                    <div className="input-field">
                        <input
                            id="email"
                            type="email"
                            className="yellow-input"
                            name="email"
                            defaultValue={props.data.email}
                            onChange={props.changeHandler}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input
                            id="password"
                            type="password"
                            className="yellow-input"
                            name="password"
                            defaultValue={props.data.password}
                            onChange={props.changeHandler}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
            </div>
            <div className="card-action dflex-sb">
                <button
                    className="btn green lighten-1"
                    type="submit"
                    name="action"
                    onClick={props.loginHandler}
                    disabled={props.loading}
                >
                    Войти
                </button>
                <NavLink
                    to="/register"
                    className="btn yellow darken-4"
                    type="submit"
                    name="action"
                    disabled={props.loading}
                >
                    Регистрация
                </NavLink>
            </div>
        </div>
    );
};