import React from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Equation } from '../components/calculate/Equation';
import { Params } from '../components/calculate/Params';
import { Size } from '../components/calculate/Size';

export const Calculator = (props) => {

    const {path, url} = useRouteMatch()

    return (
        <React.Fragment>
            <nav className="nav-extended dflex-center">
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><Link to={`${url}/params`} className="active">Параметры модели</Link></li>
                        <li className="tab"><Link to={`${url}/size`}>Размер</Link></li>
                        <li className="tab"><Link to={`${url}/equation`}>Уравнение</Link></li>
                    </ul>
                </div>
            </nav>
            <div className='container'>
                <div className='container-card'>
                    <Switch>
                        <Route path={`${path}/params`} exact component={() => (<Params />)}/>
                        <Route path={`${path}/size`} component={() => (<Size />)}/>
                        <Route path={`${path}/equation`} component={() => (<Equation />)}/>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
};
