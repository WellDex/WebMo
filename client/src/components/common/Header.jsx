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
                    <a href="#" className="brand-logo center">WebMo</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><NavLink to="sass.html">Калькулятор</NavLink></li>
                        <li><NavLink to="badges.html">Список проектов</NavLink></li>
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