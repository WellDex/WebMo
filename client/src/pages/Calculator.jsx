import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Equation } from '../components/calculate/Equation';
import { Params } from '../components/calculate/Params';
import { Size } from '../components/calculate/Size';

export const Calculator = (props) => {

    const [valiidationError, setValidationError] = useState(false)

    const [projectData, setProjectData] = useState({
        projectName: '',
        description: '',
        projectType: ''
    })

    const [constants, setConstants] = useState({
        A: 2.0,
        B: 1.5,
        P1: 1.00,
        P2: 0.33
    })

    const [params, setParams] = useState({
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

    const [projectFormulaData, setProjectFormulaData] = useState({
        VnytrLogOb: {low: 0, middle: 0, high: 0, count: 0},
        VneshInterface: {low: 0, middle: 0, high: 0, count: 0},
        VneshVvod: {low: 0, middle: 0, high: 0, count: 0},
        VneshVuvod: {low: 0, middle: 0, high: 0, count: 0},
        VneshZapros: {low: 0, middle: 0, high: 0, count: 0},
        result: {
            common: 0,
            size: {
                sizeWebObject: 0,
                countStringCode: 0
            },
            other: {
                Tn: 0,
                Tmin: 0,
                Tmax: 0,
                Dn: 0,
                Dmin: 0,
                Dmax: 0,
                Cn: 0
            }
        }
    })

    const {path, url} = useRouteMatch()

    const inputProjectDataValueHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        
        setProjectData(projectData => {
            if(value.length === 0 && name === 'projectName'){
                setValidationError(true)
                return {...projectData, [name]: value}
            }else if(value.length !== 0 && name === 'projectName'){
                setValidationError(false)
                return {...projectData, [name]: value}
            }
            return {...projectData, [name]: value}
        })
    }

    const inputParamsValueHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        if(e.target.type === 'select-one'){
            setParams(params => ({...params, [name]: +value}))
        }
        setConstants(params => ({...params, [name]: +value}))
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
                        <Route 
                        path={`${path}/params`} exact 
                        render={() => (
                        <Params 
                        params={params}
                        projectData={projectData}
                        constants={constants}
                        valiidationError={valiidationError}
                        inputProjectDataValueHandler={inputProjectDataValueHandler} 
                        inputParamsValueHandler={inputParamsValueHandler}/>)}
                        />

                        <Route path={`${path}/size`} render={() => (<Size projectFormulaData={projectFormulaData}/>)}/>
                        <Route path={`${path}/equation`} render={() => (<Equation />)}/>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
};
