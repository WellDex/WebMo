import React, { useState } from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Equation } from '../components/calculate/Equation';
import { Params } from '../components/calculate/Params';
import { Size } from '../components/calculate/Size';

export const Calculator = (props) => {

    const [params, setParams] = useState({
        projectName: '',
        description: '',
        projectType: '',
        A: 2.0,
        B: 1.5,
        P1: 1.00,
        P2: 0.33,
        CDI: null,
        CPLX: 0.63,
        PDIF: 0.75,
        PERS: 1.55,
        PREX: 1.35,
        FCIL: 1.36,
        SCED: 1.35,
        RUSE: 1.00,
        TEAM: 1.45,
        PEFF: 1.36
    })

    const {path, url} = useRouteMatch()

    const inputValueHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        
        if(e.target.type === 'select-one'){
            setParams(params => ({...params, [name]: +value}))
        }

        setParams(params => ({...params, [name]: value}))
    }

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
                        <Route path={`${path}/params`} exact render={() => (<Params attributes={params} inputValueHandler={inputValueHandler}/>)}/>
                        <Route path={`${path}/size`} render={() => (<Size />)}/>
                        <Route path={`${path}/equation`} render={() => (<Equation />)}/>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
};
