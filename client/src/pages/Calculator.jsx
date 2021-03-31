import React, { useState, useEffect, useContext } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Params } from '../components/calculate/Params';
import { Size } from '../components/calculate/Size';
import { useRequest } from "../hooks//hookReq";
import { AuthContext } from "../context/AuthContext";
import { useMessage } from "../hooks/messageHook";
import { ResultModal } from '../components/modal/ResultModal';

export const Calculator = (props) => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const { error, req, clearError } = useRequest();
    const [showModal, setShowModal] = useState(false);
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

    const { path, url } = useRouteMatch()

    const inputValueHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (e.target.type === 'select-one') {
            setParams(params => ({ ...params, [name]: +value }))
        }

        setParams(params => ({ ...params, [name]: value }))
    }

    const changeShowModal = () => setShowModal(!showModal);

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const saveResult = async (e) => {
        try {
            const data = await req('/project/create', 'POST', {/*parametru*/ }, { Authorization: `Baerer ${auth.token}` })
        } catch (e) { }
    }

    return (
        <div clasName='pos-rel'>
            <nav className="nav-extended dflex-center">
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><Link to={`${url}/params`} className="active">Параметры модели</Link></li>
                        <li className="tab"><Link to={`${url}/size`}>Размер</Link></li>
                    </ul>
                </div>
            </nav>
            <div className='container'>
                <div className='container-card'>
                    <Switch>
                        <Route path={`${path}/params`} exact render={() => (<Params attributes={params} inputValueHandler={inputValueHandler} />)} />
                        <Route path={`${path}/size`} render={() => (<Size />)} />
                    </Switch>
                </div>
            </div>
            <div className='txt-al-center mg-top mg-bottom'>
                <a className="waves-effect waves-light btn-small" onClick={changeShowModal}>Рассчитать проект</a>
            </div>
            {
                showModal && <ResultModal changeShowModal={changeShowModal} saveResult={saveResult} />
            }
        </div>
    );
};
