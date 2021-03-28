import React from 'react';
import { NavLink } from "react-router-dom";

export const Register = (props) => {
    return (
        <div className="card blue darken-1">
            <div className="card-content white-text">
                <span className="card-title">Регистрация</span>
                <div>
                    <div className="input-field">
                        <input
                            id="name"
                            type="text"
                            className="yellow-input"
                            name="name"
                            defaultValue={props.data.name}
                            onChange={props.changeHandler}
                        />
                        <label htmlFor="email">Имя</label>
                    </div>
                    <div className="input-field">
                        <input
                            id="lastName"
                            type="text"
                            className="yellow-input"
                            name="lastName"
                            defaultValue={props.data.lastName}
                            onChange={props.changeHandler}
                        />
                        <label htmlFor="password">Фамилия</label>
                    </div>
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
                    className="btn btn green lighten-1"
                    type="submit"
                    name="action"
                    onClick={props.registerHandler}
                    disabled={props.loading}
                >
                    Регистрация
                </button>
                <NavLink
                    to="/login"
                    className="btn yellow darken-4"
                    type="submit"
                    name="action"
                    disabled={props.loading}
                >
                    Авторизация
                </NavLink>
            </div>
        </div>
    );
};