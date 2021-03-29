import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Equation } from '../components/calculate/Equation';
import { Params } from '../components/calculate/Params';
import { Size } from '../components/calculate/Size';

export const Calculator = (props) => {

    return (
        <React.Fragment>
            <nav className="nav-extended dflex-center">
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><Link to="/params" className="active">Параметры модели</Link></li>
                        <li className="tab"><Link to="/size">Размер</Link></li>
                        <li className="tab"><Link to="/equation">Уравнение</Link></li>
                    </ul>
                </div>
            </nav>
            <div className='container'>
                <div className='container-card'>
                    <Switch>
                        {/* <Route to='/params' exact>
                            <Params />
                        </Route> */}
                        {/* <Route to='/size' exact>
                            <Size />
                        </Route> */}
                        <Route to='/equation' exact>
                            <Equation />
                        </Route>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
};
