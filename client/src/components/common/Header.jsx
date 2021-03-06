import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Header = (props) => {
    const auth = useContext(AuthContext);

    const logoutHandler = (e) => {
        e.preventDefault();
        auth.logout();
        return <Redirect to='/' />;
    };

    return (
        <header>
            <nav>
                <div className="nav-wrapper pd-l-10">
                    <a className="brand-logo center" disabled={true} >WebMo</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><NavLink to="/calculator/params">Калькулятор</NavLink></li>
                        <li><NavLink to="/listProject">Список проектов</NavLink></li>
                        <li><NavLink to="/about">О нас</NavLink></li>
                    </ul>
                    <ul id="nav-mobile" className="right">
                        <li>
                            <a href={'#'} onClick={logoutHandler}>
                                Выход
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};