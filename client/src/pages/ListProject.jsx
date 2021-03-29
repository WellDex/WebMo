import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Preloader } from '../components/common/Preloader';
import { AuthContext } from '../context/AuthContext';
import { useRequest } from '../hooks/hookReq';
import { useMessage } from '../hooks/messageHook';

export const ListProject = (props) => {
    const { token } = useContext(AuthContext);
    const message = useMessage();
    const { loading, error, req, clearError } = useRequest();
    const [form, setForm] = useState({ id: null, name: "", description: "", isCondition: false, dateEx: null });
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

    const changeHandler = (e, id) => {
        const project = projects.find(el => el._id === id);

        if (e.target.name === 'name') {
            setForm({
                ...form,
                id: project._id,
                name: e.target.value,
                description: project.description,
                isCondition: project.isCondition,
                dateEx: project.dateEx
            });
        } else {
            setForm({
                ...form,
                id: project._id,
                name: project.name,
                description: e.target.value,
                isCondition: project.isCondition,
                dateEx: project.dateEx
            });
        };
    };

    const updateProject = () => {
        updateProjectHandler().then(() => {
            getProjects();
        });
    };

    const updateProjectHandler = async () => {
        try {
            const data = await req('/progect/update', 'POST', { ...form }, {
                Authorization: `Bearer ${token}`
            });

            message(data.message);
        } catch (e) { };
    };

    const deleteProjectHandler = async (id) => {
        try {
            const data = await req('/api/project/delete', 'DELETE', { id }, {
                Authorization: `Bearer ${token}`,
            });

            message(data.message);

            getProjects();
        } catch (e) { };
    };

    // const projectMap = projects.map(project =>
    //     <Project
    //         key={project._id}
    //         project={project}
    //         changeHandler={changeHandler}
    //         updateProject={updateProject}
    //         deleteProjectHandler={deleteProjectHandler}
    //         loading={loading}
    //     />
    // );

    if (loading) {
        return <Preloader />;
    };

    return (
        <>
            {projects.length > 0
                ? <ul className='collapsible'>
                    {/* {projectMap} */}
                </ul>
                : <p className='dflex-center helpers'>У вас нет проектов.</p>
            }
        </>
    );
};