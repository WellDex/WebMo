import React from 'react';
import { Form } from 'react-bootstrap';

export const NameAndDescription = ({ projectData, inputProjectDataValueHandler, valiidationError }) => {

    return (
        <Form>
            <Form.Group>
                <Form.Label>Название проекта:</Form.Label>
                <Form.Control onChange={inputProjectDataValueHandler} maxLength="150" value={projectData.projectName} name="projectName"/>
                {valiidationError && <div><span className="error-input-name">Введите название проекта</span> <br/></div> }
                <Form.Label>Описание проекта:</Form.Label>
                <Form.Control onChange={inputProjectDataValueHandler} maxLength="250" value={projectData.description} as="textarea" rows={3} name="description"/>
            </Form.Group>
        </Form>
    );
};