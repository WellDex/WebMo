import React from 'react';
import { useRoutes } from './routes';
import { useAuth } from './hooks/authHook';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Preloader } from './components/common/Preloader';
import { Header } from './components/common/Header';
import 'materialize-css';

export const App = () => {
    const { token, login, logout, userId, ready, email } = useAuth();
    const isAuth = !!token;
    const routes = useRoutes(isAuth, email);

    // if (!ready) {
    //     return <Preloader />;
    // }

    return (
        <AuthContext.Provider value={{ token, userId, login, logout, isAuth, email }}>
            <BrowserRouter>
                {!isAuth && <Header />}
                <div className='container'>
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};