import React from 'react';
import { Form } from 'react-bootstrap';

export const NameAndDescription = ({ attributes, inputValueHandler }) => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Название проекта:</Form.Label>
                <Form.Control onChange={inputValueHandler} value={attributes.projectName} name="projectName"/>
                <Form.Label>Описание проекта:</Form.Label>
                <Form.Control onChange={inputValueHandler} value={attributes.description} as="textarea" rows={3} name="description"/>
            </Form.Group>
        </Form>
    );
};