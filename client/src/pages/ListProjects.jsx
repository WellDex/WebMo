import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Preloader } from '../components/common/Preloader';
import { Project } from '../components/listProjects/Project';
import { AuthContext } from '../context/AuthContext';
import { useRequest } from '../hooks/hookReq';
import { useMessage } from '../hooks/messageHook';

export const ListProjects = (props) => {
    const { token } = useContext(AuthContext);
    const message = useMessage();
    const { loading, error, req, clearError } = useRequest();
    const [projects, setProjects] = useState([]);

    const getProjects = useCallback(async () => {
        try {
            const data = await req('/progect/', 'GET', null, {
                Authorization: `Bearer ${token}`,
            });

            setProjects(data);
        } catch (e) { };
    }, [token, req]);

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const openProject = (id) => <Redirect to={`/calculator/${id}`} />;

    const deleteProjectHandler = async (id) => {
        try {
            const data = await req('/api/project/delete', 'DELETE', { id }, {
                Authorization: `Bearer ${token}`,
            });

            message(data.message);

            getProjects();
        } catch (e) { };
    };

    const projectMap = projects.map(project =>
        <Project
            key={project.id}
            project={project}
            openProject={openProject}
            deleteProjectHandler={deleteProjectHandler}
            loading={loading}
        />
    );

    if (loading) {
        return <Preloader />;
    };

    return (
        <div className='container'>
            <div className='container-card'>
                {projects.length > 0
                    ? <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {projectMap}
                        </tbody>
                    </table>
                    : <p className='dflex-center helpers'>У вас нет проектов.</p>
                }
            </div>
        </div>
    );
};