import React from 'react';

export const Project = (props) => {
    return (
        <tr>
            <td>{props.project.name}</td>
            <td>
                <a className="waves-effect waves-light btn-small" onClick={() => props.openProject(props.project.id)} disabled={props.loading}>
                    <i className="material-icons">create</i>
                </a>
            </td>
            <td>{props.project.createTime}</td>
            <td>
                <a className="waves-effect waves-light btn-small" onClick={() => props.deleteProjectHandler(props.project.id)} disabled={props.loading}>
                    <i className="material-icons">clear</i>
                </a>
            </td>
        </tr>
    );
}